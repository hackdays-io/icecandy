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
import { AppProfile } from '../../../types/profile'
import { ModuleTypeAddress } from '../../../utils/moduleType2Address'

type Props = {
  profileId: number
  module?: AppProfile.ModuleType
  moduleId?: number
}

const SendIceCandyButton: FC<Props> = ({ profileId, module, moduleId }) => {
  const { loading, send, errors, result } = useSendIceCandy()
  const tokenURI = useGetIceCandyTokenURI(result?.tokenId.toNumber())
  const { onClose, onOpen, isOpen } = useDisclosure()

  useEffect(() => {
    if (result?.tokenId) onOpen()
  }, [result])

  return (
    <>
      <Button
        onClick={() =>
          send(
            profileId,
            module ? ModuleTypeAddress[module] : ethers.constants.AddressZero,
            moduleId || 0
          )
        }
        isLoading={loading}
        size="xs"
        my={2}
      >
        IceCandyを送る
      </Button>
      <ModalBase isOpen={isOpen} onClose={onClose}>
        {tokenURI && (
          <Box
            p={5}
            backgroundImage={
              result?.iceCandyType === 2
                ? "url('/images/icecandy/sent_icecandy_effect.jpg')"
                : ''
            }
            backgroundPosition="center center"
          >
            <Text fontWeight="bold" fontSize="26px" textAlign="center" py={3}>
              {result?.iceCandyType === 2 ? 'あたり！' : 'はずれ...'}
            </Text>
            <Box width="80%" margin="0 auto">
              <img
                src={
                  result?.iceCandyType === 2
                    ? '/images/icecandy/icecandy_lucky.png'
                    : '/images/icecandy/icecandy_unlucky.png'
                }
                alt=""
              />
            </Box>
          </Box>
        )}
      </ModalBase>
    </>
  )
}

export default SendIceCandyButton
