import { Image } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { ipfs2http } from '../../utils/ipfs2https'

type Props = {
  url?: string
  size?: 'sm' | 'md' | 'lg' | 'auto'
}

const NFTImage: FC<Props> = ({ url, size = 'md' }) => {
  const parsedImageURL = useMemo(() => {
    if (url?.includes('ipfs')) {
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
        return 'auto'
      default:
        return '75px'
    }
  }, [size])

  if (url) {
    return (
      <Image
        display="inline-block"
        width={imageSize}
        height={imageSize}
        src={parsedImageURL}
        alt=""
        objectFit="cover"
      />
    )
  } else {
    return <></>
  }
}

export default NFTImage
