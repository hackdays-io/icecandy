import { Box, Container, Spinner } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import ProfileMain from '../../components/organisms/profile/Main'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'
import { useSendAndReceiveHistoryNum } from '../../hooks/useIceCandy'

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { profileId } = router.query
  const { sendAndReceiveHistoryNum } = useSendAndReceiveHistoryNum(
    Number(profileId)
  )

  const {
    profile,
    loading,
    snsAccounts,
    nftCollection,
    poapCollection,
    score,
  } = useRetrieveProfileNFTByTokenId(profileId as string)

  const stats = useMemo(() => {
    if (!score) return
    return {
      score: Number(score[0].point.toString()),
      sentNumOfPeople: sendAndReceiveHistoryNum?.sender as number,
      receiveNumOfPeople: sendAndReceiveHistoryNum?.receiver as number,
      sentNum: sendAndReceiveHistoryNum?.sent as number,
      receiveNum: sendAndReceiveHistoryNum?.received as number,
    }
  }, [score, sendAndReceiveHistoryNum])

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : (
        <Container maxW="800px">
          <ProfileMain
            name={profile?.name.toString()}
            introduction={profile?.introduction.toString()}
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
