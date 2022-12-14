import { Box, Flex, Grid, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import WalletConnectButton from './atoms/WalletConnectButton'

const Header: FC = () => {
  return (
    <Grid templateColumns="1fr 1fr" p={3}>
      <Flex>
        <Box height="80px">
          <Link href="/">
            <Image
              src="/images/logo/landscape.png"
              height="80px"
              width="184px"
            />
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent="end" alignItems="center">
        <WalletConnectButton />
      </Flex>
    </Grid>
  )
}

export default Header
