import { ChainId } from '@thirdweb-dev/sdk'
import { INFTCollectionModule } from './contracts'

export namespace AppProfile {
  export type FormData = {
    handle: string
    imageURI: string
    nfts: { chain: ChainId; index: number }[]
  }

  export type Module<T> = {
    type: T
    data: WhichModule<T>
  }

  export type WhichModule<M> = M extends 'nftCollection'
    ? INFTCollectionModule.NFTStructStruct[]
    : any
}
