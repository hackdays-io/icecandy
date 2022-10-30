import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { INFTCollectionModule } from '../../../types/contracts'
import NFTImage from '../NFTImage'

const SinglePOAP: FC<{ poap: INFTCollectionModule.NFTStructStruct }> = ({
  poap,
}) => {
  const [tokenURI, setTokenURI] = useState<any>()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(String(poap.tokenURI))
      setTokenURI(data)
    }
    fetch()
  }, [poap])

  return (
    <Box
      height={0}
      paddingBottom="100%"
      overflow="hidden"
      borderRadius="full"
      position="relative"
    >
      <NFTImage
        size="auto"
        url={tokenURI?.image || tokenURI?.image_url || ''}
      />
    </Box>
  )
}

export default SinglePOAP
