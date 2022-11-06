import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useSentAndReceivedHistories } from '../../../hooks/useIceCandy'
import { useLookupProfileId } from '../../../hooks/useProfileContract'
import { AppProfile } from '../../../types/profile'
import PFP from '../../atoms/profile/PFP'
import SendIceCandyButton from '../../atoms/profile/SendIceCandyButton'
import IceCandiesModule from '../../molecules/profiles/IceCandiesModule'
import IceCandyFriendsModule from '../../molecules/profiles/IceCandyFriendsModule'
import ProfileNFTCollectionModule from '../../molecules/profiles/NFTCollectionModule'
import ProfilePOAPCollectionModule from '../../molecules/profiles/POAPCollectionModule'
import ProfileSkillsModule from '../../molecules/profiles/SkillsModule'
import ProfileSNSAccountsModule from '../../molecules/profiles/SNSAccountsModule'

type CandyScoreProps = {
  title: string
  value: number
}
const CandyScoreItem: FC<CandyScoreProps> = ({ title, value }) => {
  return (
    <>
      <GridItem
        borderRadius={10}
        borderColor="primary.300"
        borderWidth={1}
        textAlign="center"
      >
        {title}
      </GridItem>
      <GridItem textAlign="center">
        <Text> {value}</Text>
      </GridItem>
    </>
  )
}

type Props = {
  pfpURI?: string
  name?: string
  introduction?: string
  wallets?: string[]
  iceCandyStats?: {
    score: number
    sentNumOfPeople: number
    receiveNumOfPeople: number
    sentNum: number
    receiveNum: number
  }
  modules: [
    AppProfile.Module<'snsAccounts'>,
    AppProfile.Module<'icecandyFriends'>,
    AppProfile.Module<'skills'>,
    AppProfile.Module<'nftCollection'>,
    AppProfile.Module<'poapCollection'>,
    AppProfile.Module<'icecandies'>
  ]
  isPreview?: boolean
}

const ProfileMain: FC<Props> = ({
  pfpURI,
  name,
  introduction,
  wallets,
  modules,
  iceCandyStats,
  isPreview,
}) => {
  const router = useRouter()
  const { profileId } = router.query
  const address = useAddress()
  const { sentAndReceivedHistories } = useSentAndReceivedHistories(
    Number(profileId)
  )

  return (
    <Box py={6}>
      <Grid
        gridTemplateColumns="1fr 350px"
        mt={4}
        backgroundColor="profileback"
        py={6}
        px={4}
        borderRadius={10}
      >
        <Flex mb={3}>
          <VStack>
            <PFP imgURI={pfpURI} size="2xl" />
            <HStack px={4} w="100%">
              <Image src="/images/profile/twitter.png" w={8}></Image>
            </HStack>
            {!isPreview && !wallets?.includes(String(address)) && (
              <SendIceCandyButton profileId={Number(profileId)} />
            )}
          </VStack>
          <VStack align="left" ml={4} pt={3}>
            <Heading size="md" mb={2}>
              {name}
            </Heading>
            <Text mb={2}>{introduction}</Text>
          </VStack>
        </Flex>
        <VStack>
          <Text fontWeight="bold" size="lg">
            IceCandyScore: {iceCandyStats?.score || '0'}
          </Text>
          <HStack borderRadius={10} backgroundColor="white" p={4}>
            <Grid templateColumns={'150px 50px'} gap={2}>
              <CandyScoreItem
                title="times sent"
                value={iceCandyStats?.sentNum || 0}
              ></CandyScoreItem>
              <CandyScoreItem
                title="people sent"
                value={iceCandyStats?.sentNumOfPeople || 0}
              ></CandyScoreItem>
              <CandyScoreItem
                title="times received"
                value={iceCandyStats?.receiveNum || 0}
              ></CandyScoreItem>

              <CandyScoreItem
                title="recipients"
                value={iceCandyStats?.receiveNumOfPeople || 0}
              ></CandyScoreItem>
            </Grid>
            <VStack w={14}>
              <Image src="/images/profile/beginner.png"></Image>
              <Text fontSize="sm">Beginner</Text>
              <Image src="/images/profile/qrcode.png"></Image>
            </VStack>
          </HStack>
        </VStack>
      </Grid>

      {modules.map((module, index) => {
        switch (module.type) {
          case 'icecandyFriends':
            return (
              <IceCandyFriendsModule
                iceCandyFriends={module.data}
                key={index}
              />
            )
          case 'nftCollection':
            return (
              <ProfileNFTCollectionModule
                isPreview={isPreview}
                nfts={module.data}
                key={index}
                wallets={wallets}
                receivedIceCandies={
                  sentAndReceivedHistories?.receivedIceCandies
                }
              />
            )
          case 'poapCollection':
            return (
              <ProfilePOAPCollectionModule
                isPreview={isPreview}
                poaps={module.data}
                key={index}
                wallets={wallets}
                receivedIceCandies={
                  sentAndReceivedHistories?.receivedIceCandies
                }
              />
            )
          case 'skills':
            return (
              <ProfileSkillsModule
                isPreview={isPreview}
                skills={module.data}
                key={index}
                wallets={wallets}
                receivedIceCandies={
                  sentAndReceivedHistories?.receivedIceCandies
                }
              />
            )
          case 'snsAccounts':
            return (
              <ProfileSNSAccountsModule snsAccounts={module.data} key={index} />
            )
          case 'icecandies':
            return <IceCandiesModule iceCandies={module.data} key={index} />
          default:
            return <></>
        }
      })}
    </Box>
  )
}

export default ProfileMain
