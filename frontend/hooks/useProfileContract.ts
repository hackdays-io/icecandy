import { useAddress } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import { orderBy, uniq, uniqBy } from 'lodash'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  INFTCollectionModule,
  IProfile,
  IScoreModule,
  ISNSAccountModule,
} from '../types/contracts'
import { TypedListener } from '../types/contracts/common'
import {
  ProfileCreatedEvent,
  ScoreCreatedEvent,
} from '../types/contracts/contracts/core/Profile'
import { ProfileCreatedEventObject } from '../types/contracts/contracts/interfaces/IProfile'
import { AppProfile } from '../types/profile'
import { useProfileNFTContractClient } from './useContractClient'
import { useENSName } from './useENS'
import { useFirstHoldNFTs, useHoldingPOAPs, usePickupNFTs } from './useToken'

export const useGenerateProfile = () => {
  const [loading, setLoading] = useState(true)
  const [generatedData, setGeneratedData] = useState<AppProfile.FormData>()
  const { firstHoldNFTs, loading: firstNFTLoading } = useFirstHoldNFTs()
  const { pickedNFTs, loading: pickedNFTLoading } = usePickupNFTs()
  const { holdingPOAPs, loading: poapLoading } = useHoldingPOAPs()
  const { ensName, ensDescription, ensPFP, loading: ensLoading } = useENSName()
  const address = useAddress()

  useEffect(() => {
    if (
      address &&
      !(pickedNFTLoading || firstNFTLoading || poapLoading || ensLoading)
    ) {
      const _firstHoldNfts: INFTCollectionModule.NFTStructStruct[] =
        firstHoldNFTs.map((nft) => {
          return {
            chainId: nft.chainId,
            contractAddress: nft.asset.contract.address,
            tokenId: nft.asset.tokenId,
            tokenURI: nft.asset.tokenUri?.raw || '',
            owner: address || '',
          }
        })
      const _pickedNFTs: INFTCollectionModule.NFTStructStruct[] =
        pickedNFTs.map((nft) => {
          return {
            chainId: nft.chainId,
            contractAddress: nft.asset.contract.address,
            tokenId: nft.asset.tokenId,
            tokenURI: nft.asset.tokenUri?.raw || '',
            owner: address || '',
          }
        })

      const nfts = uniqBy(_firstHoldNfts.concat(_pickedNFTs), (nft) => {
        return `${nft.chainId}${nft.contractAddress}${nft.tokenId}`
      })

      const poaps: INFTCollectionModule.NFTStructStruct[] =
        holdingPOAPs?.ownedNfts.map((poap) => {
          return {
            chainId: 100,
            contractAddress: poap.contract.address,
            tokenId: poap.tokenId,
            tokenURI: poap.tokenUri?.raw || '',
            owner: address || '',
          }
        }) || []

      setGeneratedData({
        name: ensName || '未入力',
        introduction: ensDescription || '',
        imageURI: ensPFP || '',
        nfts,
        poaps,
        snsAccounts: [],
      })

      setLoading(false)
    }
  }, [pickedNFTLoading, firstNFTLoading, poapLoading, ensLoading, address])

  return { generatedData, loading }
}

export const useCreateProfileNFT = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [result, setResult] = useState<ProfileCreatedEventObject>()
  const success = useRef(false)
  const address = useAddress()

  const profileNFTContract = useProfileNFTContractClient({
    config: { requireWalletConnection: true },
  })

  useEffect(() => {
    const transitionCreatedProfilePage: TypedListener<ProfileCreatedEvent> = (
      profileId,
      owner,
      blockNumber
    ) => {
      if (success.current) {
        setLoading(false)
        setResult({ profileId, owner, blockNumber })
      }
    }

    if (!profileNFTContract || !address) return
    const filter = profileNFTContract.filters.ProfileCreated(null, address)
    profileNFTContract.on(filter, transitionCreatedProfilePage)
  }, [profileNFTContract, address])

  const mintProfileNFT = async (
    name: string,
    introduction: string,
    imageURI: string,
    nfts: INFTCollectionModule.NFTStructStruct[],
    poaps: INFTCollectionModule.NFTStructStruct[],
    snsAccounts: ISNSAccountModule.SNSAccountStructStruct[]
  ) => {
    try {
      setErrors(null)
      if (!profileNFTContract) {
        setErrors('You need to connect wallet')
        return
      }
      setLoading(true)
      await profileNFTContract.createProfile({
        name,
        introduction,
        imageURI,
        nfts,
        poaps,
        snsAccounts,
      })
      success.current = true
    } catch (error) {
      setLoading(false)
      setErrors(error)
    }
  }

  return { mintProfileNFT, loading, errors, result }
}

export const useRetrieveProfileNFTByTokenId = (tokenId?: string) => {
  const [profile, setProfile] = useState<IProfile.ProfileStructStruct>()
  const [nftCollection, setNFTCollection] =
    useState<INFTCollectionModule.NFTStructStruct[]>()
  const [snsAccounts, setSNSAccounts] =
    useState<ISNSAccountModule.SNSAccountStructStruct[]>()
  const [poapCollection, setPOAPCollection] =
    useState<INFTCollectionModule.NFTStructStruct[]>()
  const [score, setScore] = useState<IScoreModule.ScoreStructStruct[]>()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const profileNFTContract = useProfileNFTContractClient()

  useEffect(() => {
    const fetch = async () => {
      try {
        if (tokenId) {
          if (!profileNFTContract) throw new Error('Cannot find contract')

          setLoading(true)
          const profile = await profileNFTContract.getProfile(Number(tokenId))
          setProfile(profile)
          const nftCollection = await profileNFTContract.getNFTCollection(
            Number(tokenId)
          )
          setNFTCollection(nftCollection)
          const snsAccounts = await profileNFTContract.getSNSAccounts(
            Number(tokenId)
          )
          setSNSAccounts(snsAccounts)
          const poapCollection = await profileNFTContract.getPOAPCollection(
            Number(tokenId)
          )
          setPOAPCollection(poapCollection)
          const score = await profileNFTContract.getScore(Number(tokenId))
          setScore(score)
          setLoading(false)
        }
      } catch (error) {
        setErrors(error)
        setLoading(false)
      }
    }
    fetch()

    return () => {
      fetch()
    }
  }, [tokenId])

  return {
    profile,
    nftCollection,
    snsAccounts,
    poapCollection,
    score,
    loading,
    errors,
  }
}

export const useProfileId = (address?: string) => {
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)
  const [profileId, setProfileId] = useState<number>()
  const profileNFTContract = useProfileNFTContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!profileNFTContract || !address) return
      setLoading(true)
      try {
        setProfileId(
          await (await profileNFTContract.getProfileId(address)).toNumber()
        )
      } catch (error) {
        setErrors(error)
      }
      setLoading(false)
    }
    fetch()
  }, [address, profileNFTContract])

  return { profileId, loading, errors }
}

export const useLookupProfileId = (address: string) => {
  const [profileId, setProfileId] = useState<BigNumber>()
  const profileContract = useProfileNFTContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!profileContract) return
      try {
        const profileId = await profileContract?.getProfileId(address)
        setProfileId(profileId)
      } catch (error) {
        setProfileId(BigNumber.from(0))
      }
    }
    fetch()
  }, [profileContract, address])

  return profileId
}
