import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import SendIceCandyButton from '../../atoms/profile/SendIceCandyButton'

type Props = {
  key: number
  name: string
  description?: string
  href?: string
  isAcceptCandy?: boolean
  profileid: number
  numOfIceCandy?: number
}

const SkillBox: FC<Props> = ({
  key,
  name,
  description,
  href,
  isAcceptCandy,
  profileid,
  numOfIceCandy,
}) => {
  return (
    <Box textAlign="center" key={key}>
      <Box border="2px solid" borderColor="gray.300" textAlign="left" p={2}>
        <Text fontWeight="bold" mb={2}>
          {name}
        </Text>
        <Text mb={2}>{description}</Text>
        <Text mb={2}>
          <a href={href}>link</a>
        </Text>
      </Box>

      {isAcceptCandy && (
        <SendIceCandyButton
          profileId={profileid}
          module="skill"
          moduleId={key + 1}
          size="xs"
          numOfIceCandy={numOfIceCandy}
        />
      )}
    </Box>
  )
}
export default SkillBox
