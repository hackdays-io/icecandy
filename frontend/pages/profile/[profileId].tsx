import { Box, Container, List, Spinner, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import ProfileMain from '../../components/organisms/profile/Main'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { profileId } = router.query

  const {
    profile,
    loading,
    errors,
    snsAccounts,
    nftCollection,
    poapCollection,
  } = useRetrieveProfileNFTByTokenId(profileId as string)

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <Container maxW="800px">
          <ProfileMain
            name={profile?.name.toString()}
            pfpURI={profile?.imageURI.toString()}
            modules={[
              { type: 'snsAccounts', data: snsAccounts || [] },
              { type: 'nftCollection', data: nftCollection || [] },
              { type: 'poapCollection', data: poapCollection || [] },
            ]}
          />
        </Container>
      )}
    </Box>
  )
}

export default ProfilePage
