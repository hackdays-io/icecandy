import { Box, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import SingleNFT from '../../components/atoms/profile/SingleNFT'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'

const EnbedNFTCollection = () => {
  const router = useRouter()
  const { profileId } = router.query
  const { nftCollection } = useRetrieveProfileNFTByTokenId(String(profileId))

  return (
    <Box>
      <Grid
        gridTemplateColumns="minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px)"
        gap={4}
      >
        {nftCollection?.map((nft) => (
          <SingleNFT nft={nft} />
        ))}
      </Grid>
    </Box>
  )
}

export default EnbedNFTCollection
