import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import { useMemo } from 'react'
import SingleIceCandy from '../../components/atoms/icecandy/SingleIceCandy'
import PFP from '../../components/atoms/profile/PFP'
import SingleFlavor from '../../components/atoms/profile/SingleFlavor'
import { useGetAvailableFlavors, useHandleFlavor } from '../../hooks/useFlavor'
import {
  useHoldingIceCandies,
  useSentAndReceivedHistories,
} from '../../hooks/useIceCandy'
import {
  useLookupProfileId,
  useRetrieveProfileNFTByTokenId,
} from '../../hooks/useProfileContract'

const MyPage: NextPage = () => {
  const address = useAddress()
  const { holdingIceCandy } = useHoldingIceCandies(address)

  const profileId = useLookupProfileId(address)
  const { profile, loading, score } = useRetrieveProfileNFTByTokenId(
    profileId?.toString()
  )
  const { sentAndReceivedHistories } = useSentAndReceivedHistories(
    profileId?.toNumber()
  )
  const { flavors } = useGetAvailableFlavors(profileId?.toNumber())
  const { activate, deactivate } = useHandleFlavor()

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
    <Box backgroundColor="red.100">
      <Container minWidth="800px" pb={20}>
        <Grid gridTemplateColumns="1fr 300px" pt={10}>
          <Flex mb={3}>
            <PFP imgURI={profile?.imageURI.toString()} />
            <Box ml={5} mt={3}>
              <Heading fontSize="24px" mb={2}>
                {profile?.name.toString()}
              </Heading>
              <Text mb={4}>{profile?.introduction.toString()}</Text>
            </Box>
          </Flex>
          <Box borderRadius={10} backgroundColor="red.100" p={4}>
            <Text fontWeight="bold" fontSize="24px">
              IceCandyScore: {stats?.score || '0'}
            </Text>
            <Text>IceCandyを送った回数: {stats?.sentNum || '0'}</Text>
            <Text>IceCandyを送った人数: {stats?.sentNumOfPeople || '0'}</Text>
            <Text>IceCandyをもらった回数: {stats?.receiveNum || '0'}</Text>
            <Text>
              IceCandyをもらった人数: {stats?.receiveNumOfPeople || '0'}
            </Text>
          </Box>
        </Grid>

        <Heading fontSize="24px" mt={10} mb={5}>
          Your IceBox
        </Heading>
        <Box p={5} borderRadius={10} backgroundColor="white">
          <Heading fontSize="18px">
            revealed icecandy: {holdingIceCandy?.revealed.length}
          </Heading>
          <Grid gridTemplateColumns="repeat(5, 120px)" gap={3}>
            {holdingIceCandy?.revealed.map((e) => (
              <SingleIceCandy
                tokenURI={e.tokenURI}
                tokenId={e.tokenId.toNumber()}
                key={e.tokenId.toNumber()}
              />
            ))}
          </Grid>

          <Heading fontSize="18px" mt={10}>
            Not revealed icecandy: {holdingIceCandy?.notRevealed.length}
          </Heading>
          <Grid gridTemplateColumns="repeat(5, 120px)" gap={3}>
            {holdingIceCandy?.notRevealed.map((e) => (
              <SingleIceCandy
                tokenURI={e.tokenURI}
                tokenId={e.tokenId.toNumber()}
                key={e.tokenId.toNumber()}
              />
            ))}
          </Grid>

          <Heading mt={10} fontSize="18px">
            lucky icecandy: {holdingIceCandy?.lucky.length}
          </Heading>
          <Grid gridTemplateColumns="repeat(5, 120px)" gap={3}>
            {holdingIceCandy?.lucky.map((e) => (
              <SingleIceCandy
                tokenURI={e.tokenURI}
                tokenId={e.tokenId.toNumber()}
                key={e.tokenId.toNumber()}
              />
            ))}
          </Grid>
        </Box>

        <Heading fontSize="24px" mt={10} mb={5}>
          Available Flavor
        </Heading>
        <Box p={5} borderRadius={10} backgroundColor="white">
          <Grid
            gridTemplateColumns="repeat(5, 140px)"
            gridTemplateRows="140px"
            gap={3}
          >
            {flavors?.map((flavor, index) => (
              <GridItem
                key={index}
                onClick={() =>
                  flavor.active
                    ? deactivate(
                        Number(profileId?.toNumber()),
                        Number(flavor.flavorType.toString()) + 1
                      )
                    : activate(
                        Number(profileId?.toNumber()),
                        Number(flavor.flavorType.toString()) + 1
                      )
                }
                cursor="pointer"
              >
                <SingleFlavor flavor={flavor} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default MyPage
