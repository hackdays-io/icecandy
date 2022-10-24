import { ethers } from 'ethers'
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

export const profileNFTContractClient = (props?: Props) => {
  const { ethereum } = window

  if (ethereum) {
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
  } else if (props?.config?.requireWalletConnection) {
    throw new Error('wallet connection is required')
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
