import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { IProfile } from '../../../types/contracts/contracts/core/Profile'
import PFP from '../../atoms/profile/PFP'

type Props = {
  iceCandyFriends?: IProfile.ProfileStructStructOutput[]
}

const IceCandyFriendsModule: FC<Props> = ({ iceCandyFriends }) => {
  return iceCandyFriends && iceCandyFriends.length > 0 ? (
    <>
      <Heading as="h2" fontWeight="bold" fontSize="20px" mt={4}>
        IceCandy Friends
      </Heading>
      <Box p={5} borderRadius={10} my={2} backgroundColor="itemsback">
        <Grid
          gridTemplateColumns="repeat(7, minmax(100px, 1fr))"
          gridGap={4}
          gridAutoRows="1fr"
        >
          {iceCandyFriends.map((friend, index) => (
            <Box textAlign="center" w={150} key={index}>
              <PFP imgURI={friend.imageURI} size="xl" />
              <Text mt={1} fontSize="14px" fontWeight="bold" color="black">
                {friend.name}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  ) : (
    <></>
  )
}

export default IceCandyFriendsModule
