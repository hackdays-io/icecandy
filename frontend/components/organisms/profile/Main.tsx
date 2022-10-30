import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AppProfile } from '../../../types/profile'
import PFP from '../../atoms/profile/PFP'
import ProfileNFTCollectionModule from '../../molecules/profiles/NFTCollectionModule'
import ProfilePOAPCollectionModule from '../../molecules/profiles/POAPCollectionModule'
import ProfileSNSAccountsModule from '../../molecules/profiles/SNSAccountsModule'

type Props = {
  pfpURI?: string
  name?: string
  introduction?: string
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
}

const ProfileMain: FC<Props> = ({
  pfpURI,
  name,
  introduction,
  modules,
  iceCandyStats,
}) => {
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
      {modules.map((module, index) => {
        switch (module.type) {
          case 'nftCollection':
            return <ProfileNFTCollectionModule nfts={module.data} key={index} />
          case 'poapCollection':
            return (
              <ProfilePOAPCollectionModule poaps={module.data} key={index} />
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
