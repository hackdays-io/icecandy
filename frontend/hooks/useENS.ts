import { useAddress } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'

export const useENSName = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [ensName, setENSName] = useState<string | null>(null)
  const [ensPFP, setENSPFP] = useState<string | null>(null)
  const [ensDescription, setENSDescription] = useState<string | null>(null)
  const providerRpc = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ETH}`

  const address = useAddress()
  const getENSName = async () => {
    const { ethereum } = window
    setLoading(true)
    try {
      const provider = new ethers.providers.JsonRpcProvider(providerRpc);
      console.log(provider)
      const ensName = await provider.lookupAddress(String(address))
      setENSName(ensName)
    } catch (e: any) {
      setErrors(e);
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { ethereum } = window
      if (!address) {
        setENSName(null)
      } else if (ethereum) {
        getENSName()
      }
    }
  }, [address])

  return { ensName, ensPFP, ensDescription, loading, errors }
}
