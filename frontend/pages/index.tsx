import { Button, Flex } from '@chakra-ui/react'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
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
    <Flex justifyContent="center" alignItems="center">
      <Button
        backgroundColor="primary.400"
        py={8}
        px={20}
        isLoading={loading}
        disabled={loading}
        onClick={() => connectAndGenerate()}
      >
        {address ? 'プロフィール生成' : 'ウォレットを接続してプロフィール作成'}
      </Button>
    </Flex>
  )
}

export default Home
