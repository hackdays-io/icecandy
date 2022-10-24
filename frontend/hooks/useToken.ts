import { useAddress } from '@thirdweb-dev/react'
import { AssetTransfersCategory, TokenUri } from 'alchemy-sdk'
import { unionBy } from 'lodash'
import { useEffect, useState } from 'react'
import { useAlchemyClient } from './useAlchemy'

export const useHoldingFTs = () => {
  const [holdingFTs, setTokens] = useState<
    { asset: string | null; address: string | null }[]
  >([])

  const address = useAddress()
  const alchemy = useAlchemyClient()

  useEffect(() => {
    const fetch = async () => {
      if (!address) return
      const balances = await alchemy.core.getAssetTransfers({
        toAddress: address,
        category: [AssetTransfersCategory.ERC20],
      })
      setTokens(
        unionBy(
          balances.transfers.map((t) => {
            return { asset: t.asset, address: t.rawContract.address }
          }),
          'address'
        )
      )
    }
    fetch()
  }, [address])

  return { holdingFTs }
}

export const useHoldingNFTs = () => {
  const [holdingNFTs, setTokens] = useState<
    {
      collectionName?: string
      tokenId: string
      name: string | null
      contractAddress: string | null
      image?: string
      tokenURI: TokenUri | undefined
    }[]
  >([])

  const address = useAddress()
  const alchemy = useAlchemyClient()

  useEffect(() => {
    const fetch = async () => {
      if (!address) return
      const nfts = await alchemy.nft.getNftsForOwner(address)
      setTokens(
        nfts.ownedNfts.map((nft) => {
          return {
            collectionName: nft.contract.name,
            tokenId: nft.tokenId,
            name: nft.title,
            contractAddress: nft.contract.address,
            image: nft.rawMetadata?.image,
            tokenURI: nft.tokenUri,
          }
        })
      )
    }
    fetch()
  }, [address])

  return { holdingNFTs }
}
