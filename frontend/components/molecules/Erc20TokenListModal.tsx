import { Box, Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { FC } from 'react'
import { useHoldingFTs } from '../../hooks/useToken'
import ModalBase from '../atoms/ModalBase'

const Erc20TokenListModal: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { holdingFTs } = useHoldingFTs()

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
          {holdingFTs?.map((t, index) => (
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
