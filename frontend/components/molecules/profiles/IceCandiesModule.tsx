import { Box, Grid, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import { IIceCandy } from '../../../types/contracts/contracts/core/IceCandy'
import { AppProfile } from '../../../types/profile'
import SingleIceCandy from '../../atoms/icecandy/SingleIceCandy'

type Props = {
  iceCandies?: AppProfile.IceCandyTokenInfo[]
}

const IceCandiesModule: FC<Props> = ({ iceCandies }) => {
  return iceCandies && iceCandies.length > 0 ? (
    <>
      <Heading as="h2" fontWeight="bold" fontSize="20px" mt={4}>
        Ice Box
      </Heading>
      <Box p={5} borderRadius={10} my={2} backgroundColor="itemsback">
        <Grid
          gridTemplateColumns="repeat(5, minmax(100px, 1fr))"
          gridGap={4}
          gridAutoRows="1fr"
        >
          {iceCandies?.map((iceCandy, index) => (
            <Box textAlign="center" key={index}>
              <SingleIceCandy
                tokenURI={iceCandy.tokenURI}
                tokenId={iceCandy.tokenId.toNumber()}
                key={index}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  ) : (
    <></>
  )
}

export default IceCandiesModule
