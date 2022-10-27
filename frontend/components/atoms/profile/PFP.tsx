import { Avatar } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  imgURI?: string
}

const PFP: FC<Props> = ({ imgURI }) => {
  return <Avatar src={imgURI} size="2xl" />
}

export default PFP
