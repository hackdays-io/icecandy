import { useEffect, useState } from 'react'
import { INFTCollectionModule, IProfile } from '../types/contracts'
import { profileNFTContractClient } from '../utils/contractClient'

export const useCreateProfileNFT = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)

  const mintProfileNFT = async (
    handle: string,
    imageURI: string,
    nfts: INFTCollectionModule.NFTStructStruct[]
  ) => {
    try {
      setErrors(null)
      const profileNFTContract = profileNFTContractClient({
        config: { requireWalletConnection: true },
      })
      if (!profileNFTContract) throw new Error('Cannot find contract')
      setLoading(true)
      await profileNFTContract.createProfile({ handle, imageURI, nfts })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrors(error)
    }
  }

  return { mintProfileNFT, loading, errors }
}

export const useRetrieveProfileNFTByTokenId = (tokenId?: string) => {
  const [profile, setProfile] = useState<IProfile.ProfileStructStructOutput>()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        if (tokenId) {
          const profileNFTContract = profileNFTContractClient()
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
