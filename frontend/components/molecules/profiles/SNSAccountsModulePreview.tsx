import { Box, Button, Link } from '@chakra-ui/react'
import { FC } from 'react'
import { ISNSAccountModule } from '../../../types/contracts'

type Props = {
  snsAccounts?: ISNSAccountModule.SNSAccountStructStruct[]
}

const ProfileSNSAccountsModulePreview: FC<Props> = ({ snsAccounts }) => {
  const SNSPageButton: FC<ISNSAccountModule.SNSAccountStructStruct> = ({
    service,
    userId,
    userPageURL,
  }) => {
    switch (service) {
      case 'twitter':
        return (
          <Link href={String(userPageURL)} target="_blank">
            <Button rounded="full" backgroundColor="#1C9BF0" color="white">
              <>Twitter: {userId}</>
            </Button>
          </Link>
        )

      default:
        return (
          <Link href={String(userPageURL)} target="_blank">
            <Button rounded="full">
              <>
                {service}: {userId}
              </>
            </Button>
          </Link>
        )
    }
  }

  return snsAccounts?.length ? (
    <Box p={5} borderRadius={10} mt={4} mb={10}>
      {snsAccounts?.map((account, index) => (
        <SNSPageButton {...account} key={index} />
      ))}
    </Box>
  ) : (
    <></>
  )
}

export default ProfileSNSAccountsModulePreview
