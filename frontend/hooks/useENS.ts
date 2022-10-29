import { ENS } from '@ensdomains/ensjs'
import { useAddress } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export const useENS = () => {
  const address = useAddress()
  const [profile, setProfile] = useState<any>()

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!address) return
        const provider = new ethers.providers.JsonRpcProvider(
          'https://eth-mainnet.g.alchemy.com/v2/KhJF45bDoKzTRM2US09xwUKYFB8yrGeO'
        )

        const ENSInstance = new ENS()
        await ENSInstance.setProvider(provider)
        const profile = await ENSInstance.getProfile(address)
        setProfile(profile)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [address])

  return profile
}
