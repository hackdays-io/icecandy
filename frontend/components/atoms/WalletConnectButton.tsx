import { Button } from '@chakra-ui/react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { FC, useCallback, useState } from 'react'

const WalletConnectButton: FC = () => {
  const [loading, setLoading] = useState(false)
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const disconnectWallet = useDisconnect()

  const handleClickButton = useCallback(async () => {
    setLoading(true)
    if (address) {
      await disconnectWallet()
    } else {
      await connectWithMetamask()
    }
    setLoading(false)
  }, [address])

  return (
    <Button
      onClick={() => handleClickButton()}
      isLoading={loading}
      disabled={loading}
      backgroundColor="primary.500"
      fontWeight="bold"
      borderRadius="full"
      color="white"
      size="lg"
    >
      {address ? 'Logout' : 'Login'}
    </Button>
  )
}

export default WalletConnectButton
