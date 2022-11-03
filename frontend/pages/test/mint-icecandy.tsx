import { useState } from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useIceCandyContractClient } from '../../hooks/useContractClient'

const TestIceCandyPage: NextPage = () => {
  const [address, setAddress] = useState<string>()
  const iceCandyContract = useIceCandyContractClient({
    config: { requireWalletConnection: true },
  })

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
      <Input
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button onClick={() => mint()}>mint</Button>
    </Box>
  )
}

export default TestIceCandyPage
