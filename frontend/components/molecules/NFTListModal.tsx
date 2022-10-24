import { Box, Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { FC, useEffect, useState } from 'react'
import { useAlchemyClient } from '../../hooks/useAlchemy'
import ModalBase from '../atoms/ModalBase'

const NFTListModal: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [tokens, setTokens] = useState<
    {
      collectionName?: string
      tokenId: string
      name: string | null
      address: string | null
      image?: string
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
            address: nft.contract.address,
            image: nft.rawMetadata?.image,
          }
        })
      )
    }
    fetch()
  }, [address])

  return (
    <>
      <Button colorScheme="blue" onClick={() => onOpen()}>
        保有NFTリスト
      </Button>
      <ModalBase isOpen={isOpen} onClose={onClose}>
        <Box>
          <Grid gridTemplateColumns="150px 1fr">
            <GridItem>コレクション名</GridItem>
            <GridItem>アドレス</GridItem>
            <GridItem>名前</GridItem>
          </Grid>
          {tokens?.map((t, index) => (
            <Grid gridTemplateColumns="150px 1fr" key={index}>
              <GridItem>{t.collectionName || '不明'}</GridItem>
              <GridItem>{t.name}</GridItem>
            </Grid>
          ))}
        </Box>
      </ModalBase>
    </>
  )
}

export default NFTListModal
