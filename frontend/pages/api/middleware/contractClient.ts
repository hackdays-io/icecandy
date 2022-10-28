import { ethers } from 'ethers'
import ProfileNFTABI from '../../../abi/Profile.json'

const profileNFTContractAddress =
  process.env.NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS!
const provierRpc = process.env.NEXT_PUBLIC_PROVIDER_RPC!

export const profileNFTContractClient = async () => {
  const provider = new ethers.providers.JsonRpcProvider(provierRpc)
  const contract = new ethers.Contract(
    profileNFTContractAddress,
    ProfileNFTABI.abi,
    provider
  )
  return contract
}
