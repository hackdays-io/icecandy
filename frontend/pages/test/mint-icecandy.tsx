import { Box, Button } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import { useIceCandyContractClient } from '../../hooks/useContractClient'

const TestIceCandyPage: NextPage = () => {
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })
  const address = useAddress()

  const mint = async () => {
    if (!iceCandyContract || !address) return
    try {
      await iceCandyContract.mint(address)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      <Button onClick={() => mint()}>mint</Button>
    </Box>
  )
}

export default TestIceCandyPage
