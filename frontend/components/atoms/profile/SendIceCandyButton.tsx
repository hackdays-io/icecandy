import { Button } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { FC } from 'react'
import { useSendIceCandy } from '../../../hooks/useIceCandy'
import { ethers } from 'ethers'

type Props = {
  profileId: number
}

const SendIceCandyButton: FC<Props> = ({ profileId }) => {
  const { loading, send, errors } = useSendIceCandy()
  const address = useAddress()

  return (
    <>
      <Button
        onClick={() => send(profileId, ethers.constants.AddressZero, 0)}
        isLoading={loading}
      >
        IceCandyを送る
      </Button>
    </>
  )
}

export default SendIceCandyButton
