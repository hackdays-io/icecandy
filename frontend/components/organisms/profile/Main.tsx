import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
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
import ProfileSNSAccountsModule from '../../molecules/profiles/SNSAccountsModule'

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
      <Grid gridTemplateColumns="1fr 300px">
        <Flex mb={3}>
          <PFP imgURI={pfpURI} />
          <Box ml={5} mt={3}>
            <Heading fontSize="24px" mb={2}>
              {name}
            </Heading>
            <Text mb={4}>{introduction}</Text>
          </Box>
        </Flex>
        <Box borderRadius={10} backgroundColor="red.100" p={4}>
          <Text fontWeight="bold" fontSize="24px">
            IceCandyScore: {iceCandyStats?.score || '0'}
          </Text>
          <Text>IceCandyを送った回数: {iceCandyStats?.sentNum || '0'}</Text>
          <Text>
            IceCandyを送った人数: {iceCandyStats?.sentNumOfPeople || '0'}
          </Text>
          <Text>
            IceCandyをもらった回数: {iceCandyStats?.receiveNum || '0'}
          </Text>
          <Text>
            IceCandyをもらった人数: {iceCandyStats?.receiveNumOfPeople || '0'}
          </Text>
        </Box>
      </Grid>

      {!isPreview && !wallets?.includes(String(address)) && (
        <SendIceCandyButton profileId={Number(profileId)} />
      )}

      {modules.map((module, index) => {
        switch (module.type) {
          case 'nftCollection':
            return (
              <ProfileNFTCollectionModule
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
                poaps={module.data}
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
