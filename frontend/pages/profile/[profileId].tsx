import { Box, List, Spinner, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { profileId } = router.query

  const { profile, loading, errors } = useRetrieveProfileNFTByTokenId(
    profileId as string
  )

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Text>ハンドル: {profile?.handle}</Text>
          <Text>PFPURI: {profile?.imageURI}</Text>
          <Text>{JSON.stringify(errors)}</Text>
        </>
      )}
    </Box>
  )
}

export default ProfilePage
