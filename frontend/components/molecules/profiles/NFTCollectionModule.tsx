import { Box, Grid, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { INFTCollectionModule } from '../../../types/contracts'
import SingleNFT from '../../atoms/profile/SingleNFT'

type Props = {
  nfts?: INFTCollectionModule.NFTStructStruct[]
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
          <SingleNFT {...{ nft }} key={index}></SingleNFT>
        ))}
      </Grid>
    </Box>
  )
}

export default ProfileNFTCollectionModule
