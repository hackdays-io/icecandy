import { useAddress } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'

export const useENSName = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [ensName, setENSName] = useState<string | null>(null)
  const [ensPFP, setENSPFP] = useState<string | null>(null)
  const [ensDescription, setENSDescription] = useState<string | null>(null)

  const address = useAddress()
  const getENSName = () => {
    const { ethereum } = window
    setLoading(true)
    const provider = new ethers.providers.Web3Provider(ethereum as any)
    provider
      .lookupAddress(String(address))
      .then((name) => {
        console.log(`got ENS name: ${name}`)
        setENSName(name)
      })
      .catch((err: any) => {
        console.log(err)
        setErrors(err)
      })
      .finally(() => {
        setLoading(false)
      })
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
