import { Box, Heading, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { AppProfile } from '../../../types/profile'
import PFP from '../../atoms/profile/PFP'
import ProfileNFTCollectionModulePreview from '../../molecules/profiles/NFTCollectionModulePreview'
import ProfilePOAPCollectionModulePreview from '../../molecules/profiles/POAPCollectionModulePreview'
import ProfileSNSAccountsModulePreview from '../../molecules/profiles/SNSAccountsModulePreview'

type Props = {
  pfpURI?: string
  name?: string
  introduction?: string
  modules: [
    AppProfile.ModulePreview<'snsAccounts'>,
    AppProfile.ModulePreview<'nftCollection'>,
    AppProfile.ModulePreview<'poapCollection'>
  ]
}

const ProfileMainPreview: FC<Props> = ({
  pfpURI,
  name,
  introduction,
  modules,
}) => {
  return (
    <Box>
      <Box textAlign="center" mb={3}>
        <PFP imgURI={pfpURI} />
      </Box>
      <Heading fontSize="24px" textAlign="center" mb={3}>
        {name}
      </Heading>
      <Text mb={4}>{introduction}</Text>
      {modules.map((module, index) => {
        switch (module.type) {
          case 'nftCollection':
            return (
              <ProfileNFTCollectionModulePreview
                nfts={module.data}
                key={index}
              />
            )
          case 'poapCollection':
            return (
              <ProfilePOAPCollectionModulePreview
                poaps={module.data}
                key={index}
              />
            )
          case 'snsAccounts':
            return (
              <ProfileSNSAccountsModulePreview
                snsAccounts={module.data}
                key={index}
              />
            )
          default:
            return <></>
        }
      })}
    </Box>
  )
}

export default ProfileMainPreview
