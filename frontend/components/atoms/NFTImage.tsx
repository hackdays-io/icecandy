import { FC, useMemo } from 'react'
import { ipfs2http } from '../../utils/ipfs2https'

type Props = {
  url?: string
}

const NFTImage: FC<Props> = ({ url }) => {
  const parsedImageURL = useMemo(() => {
    if (url?.includes('ipfs')) {
      return ipfs2http(url)
    } else {
      return url
    }
  }, [url])

  if (url) {
    return <img src={parsedImageURL} alt="" />
  } else {
    return <></>
  }
}

export default NFTImage
