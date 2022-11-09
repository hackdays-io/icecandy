import { Box, Grid, Heading, Link } from '@chakra-ui/react'
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
    <>
      <Heading as="h2" fontWeight="bold" fontSize="20px" mt={4}>
        POAPs
      </Heading>
      <Box p={5} borderRadius={10} my={2} backgroundColor="itemsback">
        <Grid
          gridTemplateColumns="repeat(5, minmax(100px, 1fr))"
          gridGap={4}
          gridAutoRows="1fr"
        >
          {poaps?.map((poap, index) => (
            <Box textAlign="center" key={index}>
              <Link
                href={`https://opensea.io/assets/ethereum/${poap.contractAddress}/${poap.tokenId}`}
                isExternal
              >
                <SinglePOAP key={index} {...{ poap }} />
              </Link>
              {!isPreview && !wallets?.includes(String(address)) && (
                <SendIceCandyButton
                  profileId={Number(profileId)}
                  module="poapCollection"
                  moduleId={index + 1}
                  size="xs"
                  numOfIceCandy={
                    receivedIceCandies?.filter(
                      (ic) =>
                        ic.module === ModuleTypeAddress.poapCollection &&
                        ic.moduleId === index + 1
                    ).length
                  }
                />
              )}
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ProfilePOAPCollectionModule
