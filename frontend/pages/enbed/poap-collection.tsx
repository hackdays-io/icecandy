import { Box, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import SinglePOAP from '../../components/atoms/profile/SinglePOAP'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'

const EnbedPOAPCollection = () => {
  const router = useRouter()
  const { profileId } = router.query
  const { poapCollection } = useRetrieveProfileNFTByTokenId(String(profileId))

  return (
    <Box>
      <Grid
        gridTemplateColumns="minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px) minmax(120px, 200px)"
        gap={4}
      >
        {poapCollection?.map((poap) => (
          <SinglePOAP poap={poap} />
        ))}
      </Grid>
    </Box>
  )
}

export default EnbedPOAPCollection
