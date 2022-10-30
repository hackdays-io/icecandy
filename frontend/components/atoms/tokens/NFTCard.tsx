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
      <Box
        height={0}
        paddingBottom="100%"
        overflow="hidden"
        borderRadius={5}
        position="relative"
      >
        <NFTImage size="auto" url={imageURI} />
      </Box>
      <Text mt={2}>{collectionName}</Text>
      <Text fontWeight="bold">{title}</Text>
    </Box>
  )
}

export default NFTCard
