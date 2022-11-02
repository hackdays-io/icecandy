import { Box, Grid, Spinner, Text } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  name?: string
  loading?: boolean
}

const ProfileENSNameModule: FC<Props> = ({ name, loading }) => {
  return (
    <Box p={5} borderRadius={10} boxShadow="0 0 10px 10px #ecf3ff" my={8}>
      <Spinner hidden={!loading}></Spinner>
      <Text fontWeight="bold" fontSize="20px" mb={5}>
        ENS名: {name || '無し'}
      </Text>
    </Box>
  )
}

export default ProfileENSNameModule
