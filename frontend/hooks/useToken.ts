import { useAddress } from '@thirdweb-dev/react'
import {
  AssetTransfersCategory,
  OwnedNftsResponse,
  OwnedNft,
  NftTokenType,
} from 'alchemy-sdk'
import axios from 'axios'
import { BigNumber, ethers } from 'ethers'
import { unionBy } from 'lodash'
import { useEffect, useMemo, useState } from 'react'
import {
  useArbitrumAlchemyClient,
  useEthereumAlchemyClient,
  usePolygonAlchemyClient,
} from './useAlchemy'
import { usePOAPContractClient } from './useContractClient'

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

export const useHoldingPOAPs = () => {
  const [holdingPOAPs, setPOAPs] = useState<OwnedNftsResponse>()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)
  const poapContract = usePOAPContractClient()
  const address = useAddress()

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!poapContract) throw new Error('Cannot find contract')
        const holdingNum: BigNumber = await poapContract.balanceOf(address)
        const poaps: OwnedNft[] = []
        for (
          let index = 0;
          index < new Array(holdingNum.toNumber()).fill('').length;
          index++
        ) {
          const tokenId = await poapContract.tokenOfOwnerByIndex(address, index)
          const tokenURI = await poapContract.tokenURI(tokenId)
          const { data: metadata } = await axios.get(tokenURI)
          const poap: OwnedNft = {
            balance: 1,
            contract: {
              tokenType: NftTokenType.ERC721,
              address: process.env.NEXT_PUBLIC_CONTRACT_POAP!,
            },
            title: 'POAP',
            description: metadata.description,
            timeLastUpdated: '',
            metadataError: '',
            rawMetadata: metadata,
            tokenUri: tokenURI,
            tokenId: tokenId,
            media: [],
            tokenType: NftTokenType.ERC721,
          }
          poaps.push(poap)
          setPOAPs({
            ownedNfts: poaps,
            totalCount: holdingNum.toNumber(),
          })
        }
      } catch (error) {
        console.log(error)
        setErrors(error)
        setLoading(false)
      }
    }
    fetch()
  }, [address])

  return { holdingPOAPs, loading, errors }
}
