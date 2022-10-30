import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { ipfs2http } from '../../utils/ipfs2https'

type Props = {
  url?: string
  size?: 'sm' | 'md' | 'lg' | 'auto'
}

const NFTImage: FC<Props> = ({ url, size = 'md' }) => {
  const parsedImageURL = useMemo(() => {
    if (url?.includes('ipfs://')) {
      return ipfs2http(url)
    } else {
      return url
    }
  }, [url])

  const imageSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return '100px'
      case 'md':
        return '130px'
      case 'lg':
        return '160px'
      case 'auto':
        return '100%'
      default:
        return '75px'
    }
  }, [size])

  if (url) {
    return (
      <Image
        width={imageSize}
        height={imageSize}
        src={parsedImageURL}
        position="absolute"
        alt=""
        objectFit="cover"
      />
    )
  } else {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        as="span"
        width={imageSize}
        height={imageSize}
        position="absolute"
        backgroundColor="gray.100"
      >
        <Text fontSize="12px">表示できません</Text>
      </Flex>
    )
  }
}

export default NFTImage
