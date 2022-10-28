import { Flex, Grid, Text } from '@chakra-ui/react'
import { FC } from 'react'
import WalletConnectButton from './atoms/WalletConnectButton'

const Header: FC = () => {
  return (
    <Grid templateColumns="1fr 1fr" p={3}>
      <Flex>
        <Text fontSize="20px" fontWeight="bold">
          IceCandyロゴ
        </Text>
      </Flex>
      <Flex justifyContent="end">
        <WalletConnectButton />
      </Flex>
    </Grid>
  )
}

export default Header
