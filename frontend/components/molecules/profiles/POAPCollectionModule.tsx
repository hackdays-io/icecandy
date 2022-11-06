import { Box, Grid, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SentIceCandy } from '../../../hooks/useIceCandy'
import { INFTCollectionModule } from '../../../types/contracts'
import { ModuleTypeAddress } from '../../../utils/moduleType2Address'
import SendIceCandyButton from '../../atoms/profile/SendIceCandyButton'
import SinglePOAP from '../../atoms/profile/SinglePOAP'

type Props = {
  poaps: INFTCollectionModule.NFTStructStruct[]
  wallets?: string[]
  isPreview?: boolean
  receivedIceCandies?: SentIceCandy[]
}

const ProfilePOAPCollectionModule: FC<Props> = ({
  poaps,
  wallets,
  isPreview,
  receivedIceCandies,
}) => {
  const router = useRouter()
  const { profileId } = router.query
  const address = useAddress()

  return (
    <Box p={5} borderRadius={10} boxShadow="0 0 10px 10px #ecf3ff" my={8}>
      <Text fontWeight="bold" fontSize="20px" mb={5}>
        POAPs
      </Text>

      <Grid
        gridTemplateColumns="repeat(5, minmax(100px, 1fr))"
        gridGap={4}
        gridAutoRows="1fr"
      >
        {poaps?.map((poap, index) => (
          <Box textAlign="center" key={index}>
            <SinglePOAP key={index} {...{ poap }} />
            <Box fontSize="11px">
              アイスキャンディの数
              {
                receivedIceCandies?.filter(
                  (ic) =>
                    ic.module === ModuleTypeAddress.poapCollection &&
                    ic.moduleId === index + 1
                ).length
              }
            </Box>
            {!isPreview && !wallets?.includes(String(address)) && (
              <SendIceCandyButton
                profileId={Number(profileId)}
                module="poapCollection"
                moduleId={index + 1}
              />
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default ProfilePOAPCollectionModule
