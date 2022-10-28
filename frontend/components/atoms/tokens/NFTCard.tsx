import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import NFTImage from '../NFTImage'

type Props = {
  collectionName?: string
  title?: string
  imageURI?: string
}

const NFTCard: FC<Props> = ({ collectionName, title, imageURI }) => {
  return (
    <Box>
      <Box textAlign="center">
        <NFTImage size="sm" url={imageURI} />
      </Box>
      <Text>{collectionName}</Text>
      <Text fontWeight="bold">{title}</Text>
    </Box>
  )
}

export default NFTCard
