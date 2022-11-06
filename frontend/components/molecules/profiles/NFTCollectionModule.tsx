import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SentIceCandy } from '../../../hooks/useIceCandy'
import { INFTCollectionModule } from '../../../types/contracts'
import { ModuleTypeAddress } from '../../../utils/moduleType2Address'
import SendIceCandyButton from '../../atoms/profile/SendIceCandyButton'
import SingleNFT from '../../atoms/profile/SingleNFT'

type Props = {
  nfts?: INFTCollectionModule.NFTStructStruct[]
  wallets?: string[]
  isPreview?: boolean
  receivedIceCandies?: SentIceCandy[]
}

const ProfileNFTCollectionModule: FC<Props> = ({
  nfts,
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
        Favorite NFTs
      </Heading>
      <Box p={5} borderRadius={10} my={2} backgroundColor="itemsback">
        <Grid
          gridTemplateColumns="repeat(5, minmax(100px, 1fr))"
          gridGap={4}
          gridAutoRows="1fr"
        >
          {nfts?.map((nft, index) => (
            <Box textAlign="center" key={index}>
              <SingleNFT {...{ nft }} key={index} />
              <Box fontSize="11px">
                アイスキャンディの数
                {
                  receivedIceCandies?.filter(
                    (ic) =>
                      ic.module === ModuleTypeAddress.nftCollection &&
                      ic.moduleId === index + 1
                  ).length
                }
              </Box>
              {!isPreview && !wallets?.includes(String(address)) && (
                <SendIceCandyButton
                  profileId={Number(profileId)}
                  module="nftCollection"
                  moduleId={index + 1}
                />
              )}
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ProfileNFTCollectionModule
