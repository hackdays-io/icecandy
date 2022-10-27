import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import { AppProfile } from '../../../types/profile'
import PFP from '../../atoms/profile/PFP'
import ProfileNFTCollectionModule from '../../molecules/profiles/NFTCollectionModule'

type Props = {
  pfpURI?: string
  handle?: string
  modules: AppProfile.Module<'nftCollection'>[]
}

const ProfileMain: FC<Props> = ({ pfpURI, handle, modules }) => {
  return (
    <Box>
      <Box textAlign="center" mb={3}>
        <PFP imgURI={pfpURI} />
      </Box>
      <Heading fontSize="24px" textAlign="center">
        {handle}
      </Heading>
      {modules.map((module) => {
        switch (module.type) {
          case 'nftCollection':
            return <ProfileNFTCollectionModule nfts={module.data} />

          default:
            return <></>
        }
      })}
    </Box>
  )
}

export default ProfileMain
