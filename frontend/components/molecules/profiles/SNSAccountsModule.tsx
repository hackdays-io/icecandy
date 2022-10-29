import { Box, Button, Grid, Link, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { ISNSAccountModule } from '../../../types/contracts'

type Props = {
  snsAccounts?: ISNSAccountModule.SNSAccountStructStructOutput[]
}

const ProfileSNSAccountsModule: FC<Props> = ({ snsAccounts }) => {
  const SNSPageButton: FC<ISNSAccountModule.SNSAccountStructStructOutput> = ({
    service,
    userId,
    userPageURL,
  }) => {
    switch (service) {
      case 'twitter':
        return (
          <Link href={userPageURL} target="_blank">
            <Button rounded="full" backgroundColor="#1C9BF0" color="white">
              Twitter: {userId}
            </Button>
          </Link>
        )

      default:
        return (
          <Link href={userPageURL} target="_blank">
            <Button rounded="full">
              {service}: {userId}
            </Button>
          </Link>
        )
    }
  }

  return (
    <Box p={5} borderRadius={10} mt={4} mb={10}>
      {snsAccounts?.map((account) => (
        <SNSPageButton {...account} />
      ))}
    </Box>
  )
}

export default ProfileSNSAccountsModule
