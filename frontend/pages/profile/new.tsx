import { Box, Container, Spinner } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect } from 'react'
import ProfileMainPreview from '../../components/organisms/profile/MainPreview'
import { useGenerateProfile } from '../../hooks/useProfileContract'

const ProfileNewPage: NextPage = () => {
  const { loading, generatedData } = useGenerateProfile()

  useEffect(() => {}, [generatedData])

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : generatedData ? (
        <Container maxWidth="800px">
          <ProfileMainPreview
            pfpURI={generatedData?.name}
            name={generatedData?.name}
            introduction={generatedData?.introduction}
            modules={[
              { type: 'snsAccounts', data: generatedData.snsAccounts },
              { type: 'nftCollection', data: generatedData.nfts },
              { type: 'poapCollection', data: generatedData.poaps },
            ]}
          />
        </Container>
      ) : (
        <></>
      )}
    </Box>
  )
}

export default ProfileNewPage
