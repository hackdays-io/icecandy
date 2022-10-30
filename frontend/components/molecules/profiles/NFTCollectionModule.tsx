import { Box, Flex, Grid, Spinner, Text } from '@chakra-ui/react'
import { FC, useEffect, useMemo, useState } from 'react'
import { INFTCollectionModule } from '../../../types/contracts'
import NFTImage from '../../atoms/NFTImage'
import { Base64 } from 'js-base64'
import axios from 'axios'
import { ipfs2http } from '../../../utils/ipfs2https'

type Props = {
  nfts?: INFTCollectionModule.NFTStructStruct[]
}

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

const ProfileNFTCollectionModule: FC<Props> = ({ nfts }) => {
  return (
    <Box p={5} borderRadius={10} boxShadow="0 0 10px 10px #ecf3ff" my={8}>
      <Text fontWeight="bold" fontSize="20px" mb={5}>
        Favorite NFTs
      </Text>
      <Grid
        gridTemplateColumns="repeat(5, minmax(100px, 1fr))"
        gridGap={4}
        gridAutoRows="1fr"
      >
        {nfts?.map((nft, index) => (
          <SingleNFT {...{ nft }}></SingleNFT>
        ))}
      </Grid>
    </Box>
  )
}

export default ProfileNFTCollectionModule
