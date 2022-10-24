import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { profileId } = router.query
  const { profile, loading, errors } = useRetrieveProfileNFTByTokenId(
    String(profileId)
  )
  return <Box>ハンドル: {profile?.handle}</Box>
}

export default ProfilePage
