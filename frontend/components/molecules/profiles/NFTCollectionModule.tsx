import { Box, Grid, Text } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { INFTCollectionModule } from '../../../types/contracts/contracts/core/NFTCollectionModule'
import NFTImage from '../../atoms/NFTImage'

type Props = {
  nfts: INFTCollectionModule.NFTStructStruct[]
}

const ProfileNFTCollectionModule: FC<Props> = ({ nfts }) => {
  const SingleNFT: FC<{ nft: INFTCollectionModule.NFTStructStruct }> = ({
    nft,
  }) => {
    return (
      <Box display="inline-block">
        <NFTImage size="auto" url={JSON.parse(String(nft.tokenURI)).image} />
      </Box>
    )
  }

  return (
    <Box p={5} borderRadius={10} boxShadow="0 0 10px 10px #ecf3ff" my={8}>
      <Text fontWeight="bold" fontSize="20px" mb={5}>
        コレクションタイトル
      </Text>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap={2}>
        {nfts.map((nft, index) => (
          <SingleNFT key={index} {...{ nft }}></SingleNFT>
        ))}
      </Grid>
    </Box>
  )
}

export default ProfileNFTCollectionModule
