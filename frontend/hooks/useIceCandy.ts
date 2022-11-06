import { useAddress } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { useEffect, useRef, useState } from 'react'
import { TypedListener } from '../types/contracts/common'
import {
  SentEvent,
  SentEventObject,
} from '../types/contracts/contracts/core/IceCandy'
import { IProfile } from '../types/contracts/contracts/core/Profile'
import { AppProfile } from '../types/profile'
import {
  useIceCandyContractClient,
  useProfileNFTContractClient,
} from './useContractClient'
import { useLookupProfileId } from './useProfileContract'

export type HoldingIceCandies = {
  totalBalance: number
  notRevealed: AppProfile.IceCandyTokenInfo[]
  revealed: AppProfile.IceCandyTokenInfo[]
  lucky: AppProfile.IceCandyTokenInfo[]
  unlucky: AppProfile.IceCandyTokenInfo[]
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
      setLoading(true)
      try {
        const balances = await iceCandyContract.balanceOf(address)
        const notRevealed: AppProfile.IceCandyTokenInfo[] = []
        const revealed: AppProfile.IceCandyTokenInfo[] = []
        const lucky: AppProfile.IceCandyTokenInfo[] = []
        const unlucky: AppProfile.IceCandyTokenInfo[] = []
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
      } catch (error) {
        setErrors(error)
      }
      setLoading(false)
    }
    fetch()
  }, [address, iceCandyContract])

  return { holdingIceCandy, loading, errors }
}

export const useReceivedIceCandiesByProfileId = (profileId?: number) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [receivedIceCandies, setReceivedIceCandy] =
    useState<AppProfile.IceCandyTokenInfo[]>()
  const iceCandyContract = useIceCandyContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !profileId) return
      setLoading(true)
      try {
        const iceCandies = await iceCandyContract.getReceivedIceCandies(
          profileId
        )
        const receivedIceCandies: AppProfile.IceCandyTokenInfo[] = []
        for (const iceCandy of iceCandies) {
          const tokenURI = await iceCandyContract.tokenURI(iceCandy.tokenId)
          receivedIceCandies.push({
            tokenId: iceCandy.tokenId,
            tokenURI: tokenURI,
          })
        }
        setReceivedIceCandy(receivedIceCandies)
      } catch (error) {
        setErrors(error)
      }
      setLoading(false)
    }
    fetch()
  }, [profileId, iceCandyContract])

  return { receivedIceCandies, loading, errors }
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

export const useSentAndReceivedHistories = (profileId?: number) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [sentAndReceivedHistories, setSentAndReceivedHistories] =
    useState<SentAndReceivedHistories>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !profileId) return
      setLoading(true)
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
      } catch (error) {
        setErrors(error)
      }
      setLoading(false)
    }
    fetch()
  }, [profileId, iceCandyContract])

  return { sentAndReceivedHistories, loading, errors }
}

export const useGetIceCandyTokenURI = (tokenId?: number) => {
  const [tokenURI, setTokenURI] = useState<string>()
  const iceCandyContract = useIceCandyContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!tokenId) return
      try {
        const _tokenURI = await iceCandyContract?.tokenURI(tokenId)
        setTokenURI(_tokenURI)
      } catch (error) {
        setTokenURI(undefined)
      }
    }

    fetch()
  }, [tokenId])

  return tokenURI
}

export const useSendIceCandy = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [result, setResult] = useState<SentEventObject>()
  const success = useRef(false)
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })
  const address = useAddress()
  const myProfileId = useLookupProfileId(String(address))

  useEffect(() => {
    const catchEvent: TypedListener<SentEvent> = (
      tokenId,
      from,
      to,
      module,
      moduleId,
      iceCandyType,
      blockNumber
    ) => {
      if (success.current) {
        setLoading(false)
        setResult({
          tokenId,
          from,
          to,
          module,
          moduleId,
          iceCandyType,
          blockNumber,
        })
      }
    }

    if (!iceCandyContract || !address || myProfileId === undefined) return
    const filter = iceCandyContract.filters.Sent(null, myProfileId, null)
    iceCandyContract.on(filter, catchEvent)
  }, [iceCandyContract, address, myProfileId])

  const send = async (profileId: number, module: string, moduleId: number) => {
    if (!iceCandyContract || !address) {
      throw new Error('Contract or Address can not find')
    }
    setLoading(true)
    try {
      await iceCandyContract.send(profileId, module, moduleId)
      success.current = true
    } catch (error) {
      setLoading(false)
      setErrors(error)
    }
  }

  return { loading, send, errors, result }
}

export const useIceCandyFriends = (profileId?: number) => {
  const [friends, setFriends] = useState<IProfile.ProfileStructStructOutput[]>()
  const iceCandyContract = useIceCandyContractClient()
  const profileNFTContract = useProfileNFTContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!iceCandyContract || !profileId || !profileNFTContract) return
      const friends: IProfile.ProfileStructStructOutput[] = []
      try {
        const receivedIds = await iceCandyContract.getReceivedProfileIds(
          profileId
        )
        for (const id of receivedIds) {
          const profile = await profileNFTContract?.getProfile(id)
          friends.push(profile)
        }
        setFriends(friends)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [iceCandyContract, profileNFTContract, profileId])

  return { friends }
}
