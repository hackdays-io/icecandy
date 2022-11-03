import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { FC, useEffect, useState } from 'react'
import {
  useGetIceCandyTokenURI,
  useSendIceCandy,
} from '../../../hooks/useIceCandy'
import { ethers } from 'ethers'
import ModalBase from '../ModalBase'
import SingleIceCandy from '../icecandy/SingleIceCandy'

type Props = {
  profileId: number
}

const SendIceCandyButton: FC<Props> = ({ profileId }) => {
  const { loading, send, errors, result } = useSendIceCandy()
  const tokenURI = useGetIceCandyTokenURI(result?.tokenId.toNumber())
  const { onClose, onOpen, isOpen } = useDisclosure()

  useEffect(() => {
    console.log(result)
    if (result?.tokenId) onOpen()
  }, [result])

  return (
    <>
      <Button
        onClick={() => send(profileId, ethers.constants.AddressZero, 0)}
        isLoading={loading}
      >
        IceCandyを送る
      </Button>
      <ModalBase isOpen={isOpen} onClose={onClose}>
        {tokenURI && (
          <Box
            p={5}
            backgroundImage={
              result?.iceCandyType === 2
                ? "url('/images/sent_icecandy_effect.jpg')"
                : ''
            }
          >
            <Text fontWeight="bold" fontSize="26px" textAlign="center" py={3}>
              {result?.iceCandyType === 2 ? 'あたり！' : 'はずれ...'}
            </Text>
            <Box width="80%" margin="0 auto">
              <SingleIceCandy
                tokenId={result?.tokenId.toNumber() || 0}
                tokenURI={tokenURI || ''}
              />
            </Box>
          </Box>
        )}
      </ModalBase>
    </>
  )
}

export default SendIceCandyButton
