import { useAddress } from '@thirdweb-dev/react'
import { AssetTransfersCategory, OwnedNftsResponse } from 'alchemy-sdk'
import { unionBy } from 'lodash'
import { useEffect, useState } from 'react'
import {
  useArbitrumAlchemyClient,
  useEthereumAlchemyClient,
  usePolygonAlchemyClient,
} from './useAlchemy'

export const useHoldingFTs = () => {
  const [holdingFTs, setTokens] = useState<
    { asset: string | null; address: string | null }[]
  >([])

  const address = useAddress()
  const ethAlchemy = useEthereumAlchemyClient()
  const polygonAlchemy = usePolygonAlchemyClient()
  const arbAlchemy = useArbitrumAlchemyClient()

  useEffect(() => {
    const fetch = async () => {
      if (!address) return
      const balances = await polygonAlchemy.core.getAssetTransfers({
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
  const [holdingNFTsOnEth, setTokensEth] = useState<OwnedNftsResponse>()
  const [holdingNFTsOnPolygon, setTokensPolygon] = useState<OwnedNftsResponse>()
  const [holdingNFTsOnArb, setTokensArb] = useState<OwnedNftsResponse>()

  const address = useAddress()
  const ethAlchemy = useEthereumAlchemyClient()
  const polygonAlchemy = usePolygonAlchemyClient()
  const arbAlchemy = useArbitrumAlchemyClient()

  useEffect(() => {
    const fetch = async () => {
      if (!address) return
      const nftsOnEth = await ethAlchemy.nft.getNftsForOwner(address)
      const nftsOnPolygon = await polygonAlchemy.nft.getNftsForOwner(address)
      const nftsOnArb = await arbAlchemy.nft.getNftsForOwner(address)
      setTokensEth(nftsOnEth)
      setTokensPolygon(nftsOnPolygon)
      setTokensArb(nftsOnArb)
    }
    fetch()
  }, [address])

  return { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb }
}
