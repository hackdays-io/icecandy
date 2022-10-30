import { ChainId } from '@thirdweb-dev/sdk'
import { INFTCollectionModule } from './contracts'
import { ISNSAccountModule } from './contracts/contracts/core/Profile'

export namespace AppProfile {
  export type FormData = {
    name: string
    introduction: string
    imageURI: string
    nfts: INFTCollectionModule.NFTStructStruct[]
    poaps: INFTCollectionModule.NFTStructStruct[]
    snsAccounts: ISNSAccountModule.SNSAccountStructStruct[]
  }

  export type Module<T> = T extends 'nftCollection' | 'poapCollection'
    ? { type: T; data: INFTCollectionModule.NFTStructStructOutput[] }
    : T extends 'snsAccounts'
    ? { type: T; data: ISNSAccountModule.SNSAccountStructStructOutput[] }
    : any

  export type ModulePreview<T> = T extends 'nftCollection' | 'poapCollection'
    ? { type: T; data: INFTCollectionModule.NFTStructStruct[] }
    : T extends 'snsAccounts'
    ? { type: T; data: ISNSAccountModule.SNSAccountStructStruct[] }
    : any
}
