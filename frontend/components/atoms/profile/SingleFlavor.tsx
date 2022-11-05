import { CheckCircleIcon, CheckIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { IFlavorExtension } from '../../../types/contracts'

type Props = {
  flavor: IFlavorExtension.FlavorStructStruct
}

const SingleFlavor: FC<Props> = ({ flavor }) => {
  const flavorColor = useMemo(() => {
    switch (flavor.flavorType.toString()) {
      case '0':
        return '#5e3939'

      default:
        break
    }
  }, [flavor])

  const flavorText = useMemo(() => {
    switch (flavor.flavorType.toString()) {
      case '0':
        return 'Ritch'

      default:
        break
    }
  }, [flavor])

  return (
    <Box textAlign="center">
      <Box
        borderRadius="full"
        backgroundColor={flavorColor}
        width="120px"
        height="120px"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
      >
        {flavor.active && <CheckIcon color="white" />}
      </Box>
      <Text>{flavorText}</Text>
    </Box>
  )
}

export default SingleFlavor
