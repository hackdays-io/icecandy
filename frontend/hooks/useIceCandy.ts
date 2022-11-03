import { useAddress } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import { useIceCandyContractClient } from './useContractClient'

export type tokenInfo = { tokenId: BigNumber; tokenURI: string }

export type HoldingIceCandy = {
  notRevealed: tokenInfo[]
  revealed: tokenInfo[]
  lucky: tokenInfo[]
  unlucky: tokenInfo[]
}

export const useHoldingIceCandy = (address?: string) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [holdingIceCandy, setHoldingIceCandy] = useState<HoldingIceCandy>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !address) return
      try {
        const balances = await iceCandyContract.balanceOf(address)
        const notRevealed: tokenInfo[] = []
        const revealed: tokenInfo[] = []
        const lucky: tokenInfo[] = []
        const unlucky: tokenInfo[] = []
        for (
          let index = 0;
          index < Array(balances.toNumber()).fill('').length;
          index++
        ) {
          const tokenId = await iceCandyContract.tokenOfOwnerByIndex(
            address,
            index
          )
          const iceCandyType = (await iceCandyContract.getIceCandy(tokenId))
            .iceCandyType
          const tokenURI = await iceCandyContract.tokenURI(tokenId)
          iceCandyType === 0
            ? notRevealed.push({ tokenId, tokenURI })
            : iceCandyType === 1
            ? revealed.push({ tokenId, tokenURI })
            : iceCandyType === 2
            ? lucky.push({ tokenId, tokenURI })
            : unlucky.push({ tokenId, tokenURI })
        }
        setHoldingIceCandy({
          notRevealed,
          revealed,
          lucky,
          unlucky,
        })
        setLoading(false)
      } catch (error) {
        setErrors(error)
      }
    }
    fetch()
  }, [address, iceCandyContract])

  return { holdingIceCandy, loading, errors }
}

export type HoldingIceCandyNum = {
  total: number
  notRevealed: number
  revealed: number
  lucky: number
  unlucky: number
}

export const useHoldingIceCandyNum = (address?: string) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [holdingIceCandyNum, setHoldingIceCandyNum] =
    useState<HoldingIceCandyNum>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !address) return
      try {
        setHoldingIceCandyNum({
          total: (await iceCandyContract.balanceOf(address)).toNumber(),
          notRevealed: (
            await iceCandyContract.balanceOfNotRevealed(address)
          ).toNumber(),
          revealed: (
            await iceCandyContract.balanceOfRevealed(address)
          ).toNumber(),
          lucky: (await iceCandyContract.balanceOfLucky(address)).toNumber(),
          unlucky: (
            await iceCandyContract.balanceOfUnlucky(address)
          ).toNumber(),
        })
        setLoading(false)
      } catch (error) {
        setErrors(error)
      }
    }
    fetch()
  }, [address, iceCandyContract])

  return { holdingIceCandyNum, loading, errors }
}

export type SendAndReceiveHistoryNum = {
  sender: number
  receiver: number
  sent: number
  received: number
}

export const useSendAndReceiveHistoryNum = (profileId: number) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [sendAndReceiveHistoryNum, setSendAndReceivedHistoryNum] =
    useState<SendAndReceiveHistoryNum>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract) return
      try {
        setSendAndReceivedHistoryNum({
          sender: (
            await iceCandyContract.numberOfSentProfiles(profileId)
          ).toNumber(),
          receiver: (
            await iceCandyContract.numberOfReceivedProfiles(profileId)
          ).toNumber(),
          sent: (
            await iceCandyContract.numberOfSentIceCandies(profileId)
          ).toNumber(),
          received: (
            await iceCandyContract.numberOfReceivedIceCandies(profileId)
          ).toNumber(),
        })
        setLoading(false)
      } catch (error) {
        setErrors(error)
      }
    }
    fetch()
  }, [profileId, iceCandyContract])

  return { sendAndReceiveHistoryNum, loading, errors }
}

export const useSendIceCandy = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })
  const address = useAddress()

  const send = async (profileId: number, module: string, moduleId: number) => {
    if (!iceCandyContract || !address) {
      throw new Error('Contract or Address can not find')
    }
    setLoading(true)
    try {
      await iceCandyContract.send(profileId, module, moduleId)
      setLoading(false)
    } catch (error) {
      setErrors(error)
    }
  }

  return { loading, send, errors }
}
