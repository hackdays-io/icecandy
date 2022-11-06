import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
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
        <Flex
          justifyContent="center"
          alignItems="center"
          backgroundImage="url('/images/top/main_bg.jpg')"
          backgroundSize="cover"
          height="100%"
        >
          <Text textAlign="center" fontSize="24px" color="primary.500">
            Generating...
            <br />
            <Spinner mt={3} />
          </Text>
        </Flex>
      ) : generatedData ? (
        <ProfileGenerated generatedData={generatedData} />
      ) : (
        <></>
      )}
    </Box>
  )
}

export default ProfileNewPage
