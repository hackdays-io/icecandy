import { AppProfile } from '../types/profile'

export const ModuleTypeAddress: {
  [key in AppProfile.ModuleType]: string
} = {
  poapCollection: String(process.env.NEXT_PUBLIC_CONTRACT_POAPCOLLECTION),
  nftCollection: String(process.env.NEXT_PUBLIC_CONTRACT_NFTCOLLECTION),
  skill: String(process.env.NEXT_PUBLIC_CONTRACT_SKILL),
}
