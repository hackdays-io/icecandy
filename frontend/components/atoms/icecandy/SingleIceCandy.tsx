import { Image } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { ipfs2http } from '../../../utils/ipfs2https'

type Props = {
  tokenURI: string
  tokenId: number
  iceCandyType: number
}

const SingleIceCandy: FC<Props> = ({ tokenURI, tokenId, iceCandyType }) => {
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
    <>
      <Image src={metadata?.image as string} alt={metadata?.name} />
    </>
  )
}

export default SingleIceCandy
