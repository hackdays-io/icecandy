import { useAddress } from '@thirdweb-dev/react'
import { useEffect, useRef, useState } from 'react'
import { INFTCollectionModule, IProfile } from '../types/contracts'
import { TypedListener } from '../types/contracts/common'
import { ProfileCreatedEvent } from '../types/contracts/contracts/core/Profile'
import { ProfileCreatedEventObject } from '../types/contracts/contracts/interface/IProfile'
import { useProfileNFTContractClient } from './useContractClient'

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
      wallet,
      profileId,
      handle,
      imageURI,
      blockNumber
    ) => {
      if (success.current) {
        setLoading(false)
        setResult({ wallet, profileId, handle, imageURI, blockNumber })
      }
    }

    if (!profileNFTContract || !address) return

    const filter = profileNFTContract.filters.ProfileCreated(address)
    profileNFTContract.on(filter, transitionCreatedProfilePage)
  }, [profileNFTContract, address])

  const mintProfileNFT = async (
    handle: string,
    imageURI: string,
    nfts: INFTCollectionModule.NFTStructStruct[]
  ) => {
    try {
      setErrors(null)
      if (!profileNFTContract) {
        setErrors('You need to connect wallet')
        return
      }
      setLoading(true)
      await profileNFTContract.createProfile({ handle, imageURI, nfts })
      success.current = true
    } catch (error) {
      setLoading(false)
      setErrors(error)
    }
  }

  return { mintProfileNFT, loading, errors, result }
}

export const useRetrieveProfileNFTByTokenId = (tokenId?: string) => {
  const [profile, setProfile] = useState<IProfile.ProfileStructStructOutput>()
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

  return { profile, loading, errors }
}
