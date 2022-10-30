import { useAddress } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const useENSName = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [ensName, setENSName] = useState<string | null>(null)
  const [ensPFP, setENSPFP] = useState<string | null>(null)
  const [ensDescription, setENSDescription] = useState<string | null>(null)
  const providerRpc = `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ETH}`
  const PROFILE_KEYS = ['url', 'description', 'com.twitter', 'email', 'com.github', 'notice', 'keywords', 'com.discord', 'com.reddit', 'org.telegram']

  const address = useAddress()

  const getENSName = async () => {
    setLoading(true)
    try {
      const provider = new ethers.providers.JsonRpcProvider(providerRpc);
      const _ensName = await provider.lookupAddress(String(address))
      console.log(_ensName)
      if (!_ensName) {
        setLoading(false)
        return
      }
      const _ensPFP = await provider.getAvatar(String(address))
      const resolver = await provider.getResolver(_ensName!)
      const results = await Promise.all(PROFILE_KEYS.map(async (key, index) => {
        if (process.env.NEXT_PUBLIC_ENS_DELAY_TIME) {
          await sleep(Number(process.env.NEXT_PUBLIC_ENS_DELAY_TIME) * index)
        }
        return resolver?.getText(key)
      }))
      const map = new Map<string, string | undefined>();
      results.forEach((res, index) => {
        map.set(PROFILE_KEYS[index], res)
      })
      console.log(map)

      setENSName(_ensName)
      setENSPFP(_ensPFP)
      if (map.get('description')) setENSDescription(map.get('description')!)
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
