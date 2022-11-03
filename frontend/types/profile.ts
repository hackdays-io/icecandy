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

  export type ModuleType = 'nftCollection' | 'poapCollection'

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
    : any
}
