import { ChainId } from '@thirdweb-dev/sdk'
import { INFTCollectionModule } from './contracts'
import { ISNSAccountModule } from './contracts/contracts/core/Profile'

export namespace AppProfile {
  export type FormData = {
    name: string
    introduction: string
    imageURI: string
    nfts: { chain: ChainId; index: number }[]
    snsAccounts: ISNSAccountModule.SNSAccountStructStruct[]
  }

  export type Module<T> = {
    type: T
    data?: WhichModule<T>
  }

  export type WhichModule<T> = T extends 'nftCollection'
    ? INFTCollectionModule.NFTStructStructOutput[]
    : T extends 'snsAccounts'
    ? ISNSAccountModule.SNSAccountStructStructOutput[]
    : any
}
