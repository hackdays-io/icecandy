import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import WalletConnectButton from './atoms/WalletConnectButton'

const Header: FC = () => {
  return (
    <Box>
      <WalletConnectButton />
    </Box>
  )
}

export default Header
