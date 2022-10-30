import { FC, useEffect, useState } from 'react'
import { INFTCollectionModule } from '../../../types/contracts'
import NFTImage from '../../atoms/NFTImage'
import { Base64 } from 'js-base64'
import axios from 'axios'
import { ipfs2http } from '../../../utils/ipfs2https'
import { Box, Spinner } from '@chakra-ui/react'

const SingleNFT: FC<{ nft: INFTCollectionModule.NFTStructStruct }> = ({
  nft,
}) => {
  const [tokenURI, setTokenURI] = useState<string>()

  useEffect(() => {
    const fetch = async () => {
      if (!nft) return
      try {
        if (nft.tokenURI.toString().includes('data:application/json;base64')) {
          setTokenURI(
            Base64.decode(
              String(nft.tokenURI).split('data:application/json;base64,')[1]
            )
          )
        } else if (nft.tokenURI.toString().includes('ipfs://')) {
          const { data } = await axios.get(ipfs2http(nft.tokenURI.toString()))
          setTokenURI(JSON.stringify(data))
        } else if (nft.tokenURI.toString().includes('https://')) {
          const { data } = await axios.post('/api/proxy-external', {
            url: nft.tokenURI.toString(),
          })
          setTokenURI(JSON.stringify(data))
        } else {
          setTokenURI(nft.tokenURI.toString())
        }
      } catch (error) {
        setTokenURI('')
      }
    }
    fetch()
  }, [nft])

  return (
    <Box
      height={0}
      paddingBottom="100%"
      overflow="hidden"
      borderRadius={5}
      position="relative"
    >
      {tokenURI !== undefined ? (
        <NFTImage
          size="auto"
          url={
            tokenURI
              ? JSON.parse(tokenURI).image || JSON.parse(tokenURI).image_url
              : ''
          }
        />
      ) : (
        <Spinner />
      )}
    </Box>
  )
}

export default SingleNFT
