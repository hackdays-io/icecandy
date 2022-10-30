import { ChainId, useAddress } from '@thirdweb-dev/react'
import {
  AssetTransfersCategory,
  OwnedNftsResponse,
  OwnedNft,
  NftTokenType,
  AssetTransfersResponse,
  fromHex,
  Nft,
} from 'alchemy-sdk'
import axios from 'axios'
import { BigNumber, ethers } from 'ethers'
import { add, orderBy, sample, unionBy } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)

  const address = useAddress()
  const ethAlchemy = useEthereumAlchemyClient()
  const polygonAlchemy = usePolygonAlchemyClient()
  const arbAlchemy = useArbitrumAlchemyClient()

  const parseBalances = useCallback((transfers: AssetTransfersResponse) => {
    return transfers.transfers.map((t) => {
      return { asset: t.asset, address: t.rawContract.address }
    })
  }, [])

  useEffect(() => {
    const fetch = async () => {
      try {
        if (!address) return
        setLoading(true)
        const ethBalances = await ethAlchemy.core.getAssetTransfers({
          toAddress: address,
          category: [AssetTransfersCategory.ERC20],
        })
        const polygonBalances = await polygonAlchemy.core.getAssetTransfers({
          toAddress: address,
          category: [AssetTransfersCategory.ERC20],
        })
        const arbBalances = await arbAlchemy.core.getAssetTransfers({
          toAddress: address,
          category: [AssetTransfersCategory.ERC20],
        })
        const transfers = parseBalances(polygonBalances)
          .concat(parseBalances(ethBalances))
          .concat(parseBalances(arbBalances))
        setTokens(unionBy(transfers, 'address'))
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErrors(error)
      }
    }
    fetch()
  }, [address])

  return { holdingFTs, loading, errors }
}

export const useFirstHoldNFTs = () => {
  const [firstHoldNFTs, setTokens] = useState<
    { asset: Nft; chainId: ChainId }[]
  >([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>(null)

  const address = useAddress()
  const ethAlchemy = useEthereumAlchemyClient()
  const polygonAlchemy = usePolygonAlchemyClient()
  const arbAlchemy = useArbitrumAlchemyClient()

  useEffect(() => {
    const pickFirstTransaction = (transactions: AssetTransfersResponse) => {
      return orderBy(
        transactions.transfers,
        [
          (transaction) => {
            return fromHex(transaction.blockNum)
          },
        ],
        ['asc']
      )[0]
    }
    const fetch = async () => {
      try {
        if (!address) return
        setLoading(true)
        const ethTransactions = await ethAlchemy.core.getAssetTransfers({
          toAddress: address,
          category: [AssetTransfersCategory.ERC721],
        })
        const polygonTransactions = await polygonAlchemy.core.getAssetTransfers(
          {
            toAddress: address,
            category: [AssetTransfersCategory.ERC721],
          }
        )
        const arbTransactions = await arbAlchemy.core.getAssetTransfers({
          toAddress: address,
          category: [AssetTransfersCategory.ERC721],
        })
        const ethFirstTransaction = pickFirstTransaction(ethTransactions)
        const polygonFirstTransaction =
          pickFirstTransaction(polygonTransactions)
        const arbFirstTransaction = pickFirstTransaction(arbTransactions)

        const firstTokens = []
        if (ethFirstTransaction) {
          const ethNFT = await ethAlchemy.nft.getNftMetadata(
            String(ethFirstTransaction.rawContract.address),
            String(ethFirstTransaction.tokenId)
          )
          firstTokens.push({ asset: ethNFT, chainId: ChainId.Goerli })
        }
        if (polygonFirstTransaction) {
          const polygonNFT = await polygonAlchemy.nft.getNftMetadata(
            String(polygonFirstTransaction.rawContract.address),
            String(polygonFirstTransaction.tokenId)
          )
          firstTokens.push({ asset: polygonNFT, chainId: ChainId.Mumbai })
        }
        if (arbFirstTransaction) {
          const arbNFT = await ethAlchemy.nft.getNftMetadata(
            String(arbFirstTransaction.rawContract.address),
            String(arbFirstTransaction.tokenId)
          )
          firstTokens.push({ asset: arbNFT, chainId: ChainId.ArbitrumGoerli })
        }
        setTokens(firstTokens)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErrors(error)
      }
    }
    fetch()
  }, [address])

  return { firstHoldNFTs, loading, errors }
}

// とりあえずランダムにピックする関数。ゆくゆくはフロアプライスなどにもとづいて出してあげたい。
export const usePickupNFTs = () => {
  const [pickedNFTs, setPickedNFTs] = useState<
    { chainId: ChainId; asset: OwnedNft }[]
  >([])
  const [loading, setLoading] = useState(true)
  const {
    holdingNFTsOnEth,
    holdingNFTsOnPolygon,
    holdingNFTsOnArb,
    loading: nftLoading,
  } = useHoldingNFTs()

  useEffect(() => {
    if (nftLoading) return
    const _pickedNFTs: { chainId: ChainId; asset: OwnedNft }[] = []
    const eth = sample(holdingNFTsOnEth?.ownedNfts)
    eth && _pickedNFTs.push({ chainId: ChainId.Goerli, asset: eth })
    const polygon = sample(holdingNFTsOnPolygon?.ownedNfts)
    polygon && _pickedNFTs.push({ chainId: ChainId.Mumbai, asset: polygon })
    const arb = sample(holdingNFTsOnArb?.ownedNfts)
    arb && _pickedNFTs.push({ chainId: ChainId.ArbitrumGoerli, asset: arb })
    setPickedNFTs(_pickedNFTs)
    setLoading(false)
  }, [nftLoading])

  return { pickedNFTs, loading }
}

export const useHoldingNFTs = () => {
  const [holdingNFTsOnEth, setTokensEth] = useState<OwnedNftsResponse>()
  const [holdingNFTsOnPolygon, setTokensPolygon] = useState<OwnedNftsResponse>()
  const [holdingNFTsOnArb, setTokensArb] = useState<OwnedNftsResponse>()
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<any>(null)

  const address = useAddress()
  const ethAlchemy = useEthereumAlchemyClient()
  const polygonAlchemy = usePolygonAlchemyClient()
  const arbAlchemy = useArbitrumAlchemyClient()

  useEffect(() => {
    const fetch = async () => {
      if (!address) return
      try {
        const nftsOnEth = await ethAlchemy.nft.getNftsForOwner(address)
        const nftsOnPolygon = await polygonAlchemy.nft.getNftsForOwner(address)
        const nftsOnArb = await arbAlchemy.nft.getNftsForOwner(address)
        setTokensEth(nftsOnEth)
        setTokensPolygon(nftsOnPolygon)
        setTokensArb(nftsOnArb)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErrors(error)
      }
    }
    fetch()
  }, [address])

  return {
    holdingNFTsOnEth,
    holdingNFTsOnPolygon,
    holdingNFTsOnArb,
    loading,
    errors,
  }
}

export const useHoldingPOAPs = () => {
  const [holdingPOAPs, setPOAPs] = useState<OwnedNftsResponse>()
  const [loading, setLoading] = useState(true)
  const address = '0x28721ef9c918dadd500420a14eb62e403ae659d8'
  const POAPContractAddress = process.env.NEXT_PUBLIC_CONTRACT_POAP!
  const poapContract = usePOAPContractClient()

  useEffect(() => {
    const fetch = async () => {
      if (!poapContract) return
      const poaps: OwnedNft[] = []
      const { data: holdingNum } = await axios.get(
        `https://blockscout.com/xdai/mainnet/api?module=account&action=tokenbalance&contractaddress=${POAPContractAddress}&address=${address}`
      )
      const getCount =
        Number(holdingNum.result) > 4 ? 5 : Number(holdingNum.result)
      for (let i = 0; i < getCount; i++) {
        try {
          const index = getCount - i - 1
          const tokenId = await poapContract.tokenOfOwnerByIndex(address, index)
          const tokenURI = await poapContract.tokenURI(tokenId)
          const { data: metadata } = await axios.get(tokenURI)
          const poap: OwnedNft = {
            balance: 1,
            contract: {
              tokenType: NftTokenType.ERC721,
              address: POAPContractAddress,
            },
            title: 'POAP',
            description: metadata.description,
            timeLastUpdated: '',
            metadataError: '',
            rawMetadata: metadata,
            tokenUri: { raw: tokenURI, gateway: '' },
            tokenId: tokenId,
            media: [],
            tokenType: NftTokenType.ERC721,
          }
          poaps.push(poap)
        } catch (error) {
          break
        }
      }
      setPOAPs({
        ownedNfts: poaps,
        totalCount: Number(holdingNum.result),
      })
      setLoading(false)
    }
    fetch()
  }, [poapContract])

  return { holdingPOAPs, loading }
}
