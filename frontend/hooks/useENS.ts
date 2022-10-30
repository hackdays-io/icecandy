import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";


export const useENSName = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const [ensName, setResult] = useState<string | null>(null)
  const address = useAddress()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { ethereum } = window
      if (!address) {
        return
      } else if (ethereum) {
        getENSName()
      }
    }
  }, [address])
  const getENSName = () => {
    console.log(address)
    const { ethereum } = window
    setLoading(true)
    const provider = new ethers.providers.Web3Provider(ethereum as any)
    provider.lookupAddress(address).then((name) => {
      console.log(name)
      setResult(name)
    }).catch((err: any) => {
      console.log(err)
      setErrors(err)
    }
    );
  }
  return { ensName, loading, errors };
}