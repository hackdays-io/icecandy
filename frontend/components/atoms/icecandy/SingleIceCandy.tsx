import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useEatIceCandy } from '../../../hooks/useIceCandy'
import { ipfs2http } from '../../../utils/ipfs2https'

type Props = {
  tokenURI: string
  tokenId: number
  canEat: boolean
}

const SingleIceCandy: FC<Props> = ({ tokenURI, tokenId, canEat }) => {
  const { eat, loading, errors } = useEatIceCandy(1, tokenId)
  const [metadata, setMetadata] = useState<{
    name: string
    description: string
    image: string
  }>()
  useEffect(() => {
    const fetch = async () => {
      const { data: metadata } = await axios.get(ipfs2http(tokenURI))
      setMetadata(metadata)
    }
    fetch()
  }, [])

  return (
    <Box>
      <img src={metadata?.image} alt="" />
      {canEat && (
        <Button width="full" onClick={() => eat()} isLoading={loading}>
          たべる
        </Button>
      )}
    </Box>
  )
}

export default SingleIceCandy
