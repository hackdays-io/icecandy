import { Box, Container, List, Spinner, Text } from '@chakra-ui/react'
import { BigNumber } from 'ethers'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
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
    score,
  } = useRetrieveProfileNFTByTokenId(profileId as string)

  const stats = useMemo(() => {
    if (!score) return
    return {
      score: Number(score[0].point.toString()),
      sentNumOfPeople: 0,
      receiveNumOfPeople: 0,
      sentNum: 0,
      receiveNum: 0,
    }
  }, [score])

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <Container maxW="800px">
          <ProfileMain
            name={profile?.name.toString()}
            pfpURI={profile?.imageURI.toString()}
            iceCandyStats={stats}
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
