import { useAddress } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useMemo } from 'react'
import ProfileNFTABI from '../abi/Profile.json'
import IceCandyABI from '../abi/IceCandy.json'
import { IceCandy, Profile } from '../types/contracts'
import POAPABI from '../abi_external/POAP.json'

const profileNFTContractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS!
const iceCandyContractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_ICECANDY_ADDRESS!
const provierRpc = process.env.NEXT_PUBLIC_PROVIDER_RPC!
const POAPContractAddress = process.env.NEXT_PUBLIC_CONTRACT_POAP!
const xDaiProviderRPC = process.env.NEXT_PUBLIC_XDAI_PROVIDER_RPC!

type Props = {
  config?: {
    requireWalletConnection?: boolean
  }
}

export const useProfileNFTContractClient = (props?: Props) => {
  const address = useAddress()

  const contract = useMemo(() => {
    if (typeof window !== 'undefined') {
      const { ethereum } = window
      if (props?.config?.requireWalletConnection && !address) {
        return
      } else if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any)
        const signer = provider.getSigner()
        if (signer) {
          const _contract = new ethers.Contract(
            profileNFTContractAddress,
            ProfileNFTABI.abi,
            signer
          ) as Profile
          return _contract
        } else {
          return
        }
      } else {
        const provider = new ethers.providers.JsonRpcProvider(provierRpc)
        const _contract = new ethers.Contract(
          profileNFTContractAddress,
          ProfileNFTABI.abi,
          provider
        ) as Profile
        return _contract
      }
    }
  }, [address])

  return contract
}

export const useIceCandyContractClient = (props?: Props) => {
  const address = useAddress()

  const contract = useMemo(() => {
    if (typeof window !== 'undefined') {
      const { ethereum } = window
      if (props?.config?.requireWalletConnection && !address) {
        return
      } else if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum as any)
        const signer = provider.getSigner()
        if (signer) {
          const _contract = new ethers.Contract(
            iceCandyContractAddress,
            IceCandyABI.abi,
            signer
          ) as IceCandy
          return _contract
        } else {
          return
        }
      } else {
        const provider = new ethers.providers.JsonRpcProvider(provierRpc)
        const _contract = new ethers.Contract(
          iceCandyContractAddress,
          IceCandyABI.abi,
          provider
        ) as IceCandy
        return _contract
      }
    }
  }, [address])

  return contract
}

export const usePOAPContractClient = () => {
  const contract = useMemo(() => {
    const provider = new ethers.providers.JsonRpcProvider(xDaiProviderRPC)
    const _contract = new ethers.Contract(
      POAPContractAddress,
      POAPABI.abi,
      provider
    ) as any
    return _contract
  }, [])

  return contract
}
