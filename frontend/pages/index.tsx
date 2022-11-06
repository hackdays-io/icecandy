import { Box, Button, Flex } from '@chakra-ui/react'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const router = useRouter()

  const connectAndGenerate = useCallback(async () => {
    try {
      if (!address) {
        setLoading(true)
        await connectWithMetamask()
        setLoading(false)
      }
      router.push('/profile/new')
    } catch (error) {
      setLoading(false)
    }
  }, [address])

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundImage="url('/images/top/main_bg.jpg')"
      backgroundSize="cover"
    >
      <Box textAlign="center" mt="-100px">
        <Image src="/images/logo/square.png" width="500px" height="500px" />
        <br />
        <Button
          backgroundColor="#FE4E8B"
          color="white"
          size="lg"
          fontSize="20px"
          fontWeight="bold"
          py={8}
          px={12}
          isLoading={loading}
          disabled={loading}
          borderRadius="full"
          onClick={() => connectAndGenerate()}
        >
          {address
            ? 'Generate Profile Page'
            : 'Connect Wallet & Generate Profile'}
        </Button>
      </Box>
    </Flex>
  )
}

export default Home
