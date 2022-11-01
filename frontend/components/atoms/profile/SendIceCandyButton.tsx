import { Box, Button, Grid, useDisclosure } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { FC } from 'react'
import { useHoldingIceCandy, useSendIceCandy } from '../../../hooks/useIceCandy'
import SingleIceCandy from '../icecandy/SingleIceCandy'
import ModalBase from '../ModalBase'

type Props = {
  profileId: number
}

const IceCandySelector: FC<Props> = ({ profileId }) => {
  const { loading, send, errors } = useSendIceCandy()
  const address = useAddress()
  const { holdingIceCandy } = useHoldingIceCandy(address)

  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr" gap={3}>
      {holdingIceCandy?.notEatenIceCandy.map((iceCandy, index) => (
        <Box key={index} border="1px solid grey">
          <SingleIceCandy
            canEat={false}
            tokenId={iceCandy.tokenId.toNumber()}
            tokenURI={iceCandy.tokenURI}
          />
          <Button
            width="full"
            isLoading={loading}
            onClick={() => send(profileId, iceCandy.tokenId.toNumber())}
          >
            このIceCandyを送る
          </Button>
        </Box>
      ))}
    </Grid>
  )
}

const SendIceCandyButton: FC<Props> = ({ profileId }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={() => onOpen()}>IceCandyを送る</Button>
      <ModalBase isOpen={isOpen} onClose={onClose}>
        <IceCandySelector profileId={profileId} />
      </ModalBase>
    </>
  )
}

export default SendIceCandyButton
