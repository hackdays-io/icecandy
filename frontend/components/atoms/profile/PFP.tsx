import { Avatar } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  imgURI?: string
  size?: '2xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xs' | 'xs' | 'full'
}

const PFP: FC<Props> = ({ imgURI, size = 'md' }) => {
  return <Avatar src={imgURI} size={size} m={4} />
}

export default PFP
