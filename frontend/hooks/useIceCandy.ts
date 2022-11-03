import { useAddress } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import { useIceCandyContractClient } from './useContractClient'

export type tokenInfo = { tokenId: BigNumber; tokenURI: string }

export type HoldingIceCandies = {
  totalBalance: number
  notRevealed: tokenInfo[]
  revealed: tokenInfo[]
  lucky: tokenInfo[]
  unlucky: tokenInfo[]
}

export const useHoldingIceCandies = (address?: string) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [holdingIceCandy, setHoldingIceCandy] = useState<HoldingIceCandies>()
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
          totalBalance: balances.toNumber(),
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

export type SentIceCandy = {
  tokenId: number
  profileId: number
  module: string
  moduleId: number
}

export type SentAndReceivedHistories = {
  sentProfileIds: number[]
  receivedProfileIds: number[]
  sentIceCandies: SentIceCandy[]
  receivedIceCandies: SentIceCandy[]
}

export const useSentAndReceivedHistories = (profileId: number) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [sentAndReceivedHistories, setSentAndReceivedHistories] =
    useState<SentAndReceivedHistories>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract) return
      try {
        setSentAndReceivedHistories({
          sentProfileIds: (
            await iceCandyContract.getSentProfileIds(profileId)
          ).map((e) => e.toNumber()),
          receivedProfileIds: (
            await iceCandyContract.getReceivedProfileIds(profileId)
          ).map((e) => e.toNumber()),
          sentIceCandies: (
            await iceCandyContract.getSentIceCandies(profileId)
          ).map((e) => ({
            tokenId: e.tokenId.toNumber(),
            profileId: e.profileId.toNumber(),
            module: e.module,
            moduleId: e.moduleId.toNumber(),
          })),
          receivedIceCandies: (
            await iceCandyContract.getReceivedIceCandies(profileId)
          ).map((e) => ({
            tokenId: e.tokenId.toNumber(),
            profileId: e.profileId.toNumber(),
            module: e.module,
            moduleId: e.moduleId.toNumber(),
          })),
        })
        setLoading(false)
      } catch (error) {
        setErrors(error)
      }
    }
    fetch()
  }, [profileId, iceCandyContract])

  return { sentAndReceivedHistories, loading, errors }
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
