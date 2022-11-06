import { BigNumber } from 'ethers'
import { INFTCollectionModule, ISkillModule } from './contracts'
import { IIceCandy } from './contracts/contracts/core/IceCandy'
import { ISNSAccountModule } from './contracts/contracts/core/Profile'

export namespace AppProfile {
  export type FormData = {
    name: string
    introduction: string
    imageURI: string
    nfts: INFTCollectionModule.NFTStructStruct[]
    poaps: INFTCollectionModule.NFTStructStruct[]
    snsAccounts: ISNSAccountModule.SNSAccountStructStruct[]
    skills: ISkillModule.SkillStructStruct[]
  }

  export type ModuleType =
    | 'nftCollection'
    | 'poapCollection'
    | 'skill'
    | 'icecandies'

  export type IceCandyTokenInfo = { tokenId: BigNumber; tokenURI: string }

  export type Module<T> = T extends 'nftCollection' | 'poapCollection'
    ? {
        type: T
        data: INFTCollectionModule.NFTStructStruct[]
        loading?: boolean
      }
    : T extends 'snsAccounts'
    ? {
        type: T
        data: ISNSAccountModule.SNSAccountStructStruct[]
        loading?: boolean
      }
    : T extends 'skills'
    ? {
        type: T
        data: ISkillModule.SkillStructStruct[]
        loading?: boolean
      }
    : T extends 'icecandies'
    ? {
        type: T
        data: IceCandyTokenInfo[]
        loading?: boolean
      }
    : any
}
