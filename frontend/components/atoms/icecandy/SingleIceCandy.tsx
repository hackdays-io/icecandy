import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { ipfs2http } from '../../../utils/ipfs2https'
import Image from 'next/image'

type Props = {
  tokenURI: string
  tokenId: number
}

const SingleIceCandy: FC<Props> = ({ tokenURI, tokenId }) => {
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
      <img src={metadata?.image as string} alt="" />
    </Box>
  )
}

export default SingleIceCandy
