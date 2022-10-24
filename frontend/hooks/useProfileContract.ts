import { useCallback, useEffect, useState } from 'react'
import { profileNFTContractClient } from '../utils/contractClient'

export const useCreateProfileNFT = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)

  const mintProfileNFT = useCallback(async () => {
    try {
      setErrors(null)
      const profileNFTContract = profileNFTContractClient({
        config: { requireWalletConnection: true },
      })
      if (!profileNFTContract) throw new Error('Cannot find contract')
      setLoading(true)

      await profileNFTContract.createProfile({
        handle: 'yuki kawabe',
        imageURI: 'https://test.com',
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrors(error)
    }
  }, [])

  return { mintProfileNFT, loading, errors }
}

export const useRetrieveProfileNFTByTokenId = (tokenId: string) => {
  const [profile, setProfile] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const profileNFTContract = profileNFTContractClient()
        if (!profileNFTContract) throw new Error('Cannot find contract')

        setLoading(true)
        const profile = await profileNFTContract.getProfile(tokenId)
        console.log(profile)
        setProfile(profile)
        setLoading(false)
      } catch (error) {
        setErrors(error)
        setLoading(false)
      }
    }
    fetch()
  }, [tokenId])

  return { profile, loading, errors }
}
