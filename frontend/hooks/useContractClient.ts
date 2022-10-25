import { useAddress } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useMemo } from 'react'
import ProfileNFTABI from '../abi/Profile.json'
import { Profile } from '../types/contracts'

const profileNFTContractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS!
const provierRpc = process.env.NEXT_PUBLIC_PROVIDER_RPC!

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
          const _contract: Profile = new ethers.Contract(
            profileNFTContractAddress,
            ProfileNFTABI.abi,
            signer
          ) as Profile
          return _contract
        }
      } else {
        const provider = new ethers.providers.JsonRpcProvider(provierRpc)
        const _contract: Profile = new ethers.Contract(
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
