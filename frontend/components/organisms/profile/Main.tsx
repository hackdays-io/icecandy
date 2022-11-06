import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
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
    AppProfile.Module<'skills'>,
    AppProfile.Module<'nftCollection'>,
    AppProfile.Module<'poapCollection'>
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
    <Box>
      <Grid
        gridTemplateColumns="1fr 300px"
        mt={4}
        backgroundColor="profileback"
        pb={4}
        pt={4}
        borderRadius={10}
      >
        <Flex mb={3}>
          <VStack p={4}>
            <PFP imgURI={pfpURI} />
            {!isPreview && !wallets?.includes(String(address)) && (
              <SendIceCandyButton profileId={Number(profileId)} />
            )}
          </VStack>
          <VStack align="left" ml={4}>
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
          <Grid
            templateColumns={'150px 50px'}
            borderRadius={10}
            backgroundColor="white"
            p={4}
            gap={2}
          >
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
        </VStack>
      </Grid>

      {modules.map((module, index) => {
        switch (module.type) {
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
          default:
            return <></>
        }
      })}
    </Box>
  )
}

export default ProfileMain
