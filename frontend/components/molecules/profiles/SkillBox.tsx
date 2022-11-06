import { AddIcon } from '@chakra-ui/icons'
import { FaReact } from 'react-icons/fa'
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
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
      <Popover>
        <PopoverTrigger>
          <Button rightIcon={<FaReact />}>{name}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Text>{description}</Text>
            <a href={href}>link</a>
            {isAcceptCandy && (
              <SendIceCandyButton
                profileId={profileid}
                module="skill"
                moduleId={key + 1}
                size="xs"
                numOfIceCandy={numOfIceCandy}
              />
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
export default SkillBox
