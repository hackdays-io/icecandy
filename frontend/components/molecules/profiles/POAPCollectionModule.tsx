import { Box, Grid, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { INFTCollectionModule } from '../../../types/contracts'
import SinglePOAP from '../../atoms/profile/SinglePOAP'

type Props = {
  poaps: INFTCollectionModule.NFTStructStruct[]
}

const ProfilePOAPCollectionModulePreview: FC<Props> = ({ poaps }) => {
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
          <SinglePOAP key={index} {...{ poap }} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProfilePOAPCollectionModulePreview
