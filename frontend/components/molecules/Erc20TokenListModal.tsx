import { Box, Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { AssetTransfersCategory } from 'alchemy-sdk'
import { unionBy } from 'lodash'
import { FC, useEffect, useState } from 'react'
import { useAlchemyClient } from '../../hooks/useAlchemy'
import ModalBase from '../atoms/ModalBase'

const Erc20TokenListModal: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [tokens, setTokens] = useState<
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

  return (
    <>
      <Button colorScheme="blue" onClick={() => onOpen()}>
        保有ERC20トークンリスト
      </Button>
      <ModalBase isOpen={isOpen} onClose={onClose}>
        <Box>
          <Grid gridTemplateColumns="150px 1fr">
            <GridItem>トークン名</GridItem>
            <GridItem>アドレス</GridItem>
          </Grid>
          {tokens?.map((t, index) => (
            <Grid gridTemplateColumns="150px 1fr" key={index}>
              <GridItem>{t.asset || '不明'}</GridItem>
              <GridItem>{t.address}</GridItem>
            </Grid>
          ))}
        </Box>
      </ModalBase>
    </>
  )
}

export default Erc20TokenListModal
