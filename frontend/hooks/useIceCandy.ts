import { useAddress } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { useEffect, useRef, useState } from 'react'
import { TypedListener } from '../types/contracts/common'
import {
  EatenEvent,
  EatenEventObject,
} from '../types/contracts/contracts/core/IceCandy'
import {
  useIceCandyContractClient,
  useProfileNFTContractClient,
} from './useContractClient'

export const useHoldingIceCandy = (address?: string) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [holdingIceCandy, setHoldingIceCandy] = useState<{
    eatenIceCandy: { tokenId: BigNumber; tokenURI: string }[]
    notEatenIceCandy: { tokenId: BigNumber; tokenURI: string }[]
  }>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !address) return
      try {
        const holdingIceCandy = await iceCandyContract.balanceOf(address)
        const eatenIceCandy: { tokenId: BigNumber; tokenURI: string }[] = []
        const notEatenIceCandy: { tokenId: BigNumber; tokenURI: string }[] = []
        for (
          let index = 0;
          index < Array(holdingIceCandy.toNumber()).fill('').length;
          index++
        ) {
          const tokenId = await iceCandyContract.tokenOfOwnerByIndex(
            address,
            index
          )
          const isEaten = await iceCandyContract.isEaten(tokenId)
          const tokenURI = await iceCandyContract.tokenURI(tokenId)
          isEaten
            ? eatenIceCandy.push({ tokenId, tokenURI })
            : notEatenIceCandy.push({ tokenId, tokenURI })
        }
        setHoldingIceCandy({
          eatenIceCandy,
          notEatenIceCandy,
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

export const useHoldingIceCandyNum = (address?: string) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [holdingIceCandy, setHoldingIceCandy] = useState<{
    holdingIceCandy: number
    holdingEatenIceCandy: number
    holdingNotEatenIceCandy: number
  }>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !address) return
      try {
        const holdingIceCandy = await iceCandyContract.balanceOf(address)
        const holdingEatenIceCandy = await iceCandyContract.balanceOfEaten(
          address
        )
        const holdingNotEatenIceCandy =
          await iceCandyContract.balanceOfNotEaten(address)
        setHoldingIceCandy({
          holdingIceCandy: holdingIceCandy.toNumber(),
          holdingEatenIceCandy: holdingEatenIceCandy.toNumber(),
          holdingNotEatenIceCandy: holdingNotEatenIceCandy.toNumber(),
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

export const useSendIceCandy = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const profileNFTContract = useProfileNFTContractClient({
    config: { requireWalletConnection: true },
  })
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })
  const address = useAddress()

  const send = async (profileId: number, tokenId: number) => {
    if (!iceCandyContract || !profileNFTContract || !address) {
      throw new Error('Contract or Address cannnot find')
    }
    setLoading(true)
    try {
      const sendToAddress = await profileNFTContract.ownerOf(profileId)
      await iceCandyContract.transferFrom(address, sendToAddress, tokenId)
      setLoading(false)
    } catch (error) {
      setErrors(error)
    }
  }

  return { loading, send, errors }
}

export const useEatIceCandy = (profileId: number, tokenId: number) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [result, setResult] = useState<any>()
  const success = useRef(false)
  const address = useAddress()

  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const transitionEaten: TypedListener<EatenEvent> = (
      tokenId,
      from,
      profileId,
      module,
      moduleId,
      blockNumber
    ) => {
      if (success.current) {
        setLoading(false)
        setResult({
          tokenId: tokenId.toNumber(),
          from,
          profileId,
          module,
          moduleId,
          blockNumber: blockNumber.toNumber(),
        })
      }
    }

    if (!iceCandyContract || !address) return

    const filter = iceCandyContract.filters.Eaten(tokenId, null, null)
    iceCandyContract.on(filter, transitionEaten)
  }, [iceCandyContract, address])

  const eat = async () => {
    if (!iceCandyContract || !address) {
      throw new Error('Contract or Address cannnot find')
    }
    setLoading(true)
    try {
      await iceCandyContract.eat(
        tokenId,
        profileId,
        '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
        0
      )
      setLoading(false)
    } catch (error) {
      setErrors(error)
    }
  }

  return { loading, eat, errors, result }
}
