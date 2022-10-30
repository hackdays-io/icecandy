import { Box, Spinner } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import ProfileGenerated from '../../components/organisms/profile/Generated'
import { useGenerateProfile } from '../../hooks/useProfileContract'

const ProfileNewPage: NextPage = () => {
  const { loading, generatedData } = useGenerateProfile()
  const address = useAddress()

  return (
    <Box>
      {!address ? (
        <Box>need to connect wallet</Box>
      ) : loading ? (
        <Spinner />
      ) : generatedData ? (
        <ProfileGenerated generatedData={generatedData} />
      ) : (
        <></>
      )}
    </Box>
  )
}

export default ProfileNewPage
