import { Box, Container, Spinner, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import ProfileMain from '../../components/organisms/profile/Main'
import { useRetrieveProfileNFTByTokenId } from '../../hooks/useProfileContract'
import {
  useIceCandyFriends,
  useReceivedIceCandiesByProfileId,
  useSentAndReceivedHistories,
} from '../../hooks/useIceCandy'

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { profileId } = router.query
  const { sentAndReceivedHistories } = useSentAndReceivedHistories(
    Number(profileId)
  )

  const {
    profile,
    loading,
    snsAccounts,
    nftCollection,
    poapCollection,
    skills,
    score,
  } = useRetrieveProfileNFTByTokenId(profileId as string)

  const { receivedIceCandies } = useReceivedIceCandiesByProfileId(
    Number(profileId)
  )

  const { friends } = useIceCandyFriends(Number(profileId))

  const stats = useMemo(() => {
    if (!score || !sentAndReceivedHistories) return
    return {
      score: Number(score[0].point.toString()),
      sentNumOfPeople: sentAndReceivedHistories?.sentProfileIds.length,
      receiveNumOfPeople: sentAndReceivedHistories?.receivedProfileIds.length,
      sentNum: sentAndReceivedHistories?.sentIceCandies.length,
      receiveNum: sentAndReceivedHistories?.receivedIceCandies.length,
    }
  }, [score, sentAndReceivedHistories])

  return (
    <Box
      backgroundColor="candyback"
      backgroundImage="url('../../images/profile/header_bg.png')"
      backgroundSize="cover"
    >
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100%">
          <Text textAlign="center" fontSize="24px" color="white">
            Loading...
            <br />
            <Spinner mt={3} color="white" />
          </Text>
        </Flex>
      ) : (
        <Container maxW="800px">
          <ProfileMain
            name={profile?.name.toString()}
            introduction={profile?.introduction.toString()}
            pfpURI={profile?.imageURI.toString()}
            wallets={profile?.wallets.map((wallet) => wallet.toString())}
            iceCandyStats={stats}
            modules={[
              { type: 'snsAccounts', data: snsAccounts || [] },
              { type: 'icecandyFriends', data: friends || [] },
              { type: 'skills', data: skills || [] },
              { type: 'nftCollection', data: nftCollection || [] },
              { type: 'poapCollection', data: poapCollection || [] },
              { type: 'icecandies', data: receivedIceCandies || [] },
            ]}
          />
        </Container>
      )}
    </Box>
  )
}

export default ProfilePage
