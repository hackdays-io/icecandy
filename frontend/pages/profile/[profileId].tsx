import { Box, List, Spinner, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import ProfileMain from '../../components/organisms/profile/Main'
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
          <ProfileMain
            handle={profile?.handle}
            pfpURI={profile?.imageURI}
            modules={[]}
          />
        </>
      )}
    </Box>
  )
}

export default ProfilePage
