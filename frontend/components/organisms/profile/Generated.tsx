import { FC, useEffect, useState } from 'react'
import { AppProfile } from '../../../types/profile'
import ProfileMain from './Main'
import { useReward } from 'react-rewards'
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import { useCreateProfileNFT } from '../../../hooks/useProfileContract'
import { useRouter } from 'next/router'
import ProfileForm from './Form'
import { useForm } from 'react-hook-form'

type Props = {
  generatedData: AppProfile.FormData
}

const Confetti = () => {
  const { reward: confettiReward } = useReward('confettiReward', 'confetti', {
    elementCount: 300,
    lifetime: 200,
    spread: 120,
  })

  useEffect(() => {
    confettiReward()
  }, [])

  return (
    <Box textAlign="center">
      <span id="confettiReward" />
    </Box>
  )
}

const ProfileGenerated: FC<Props> = ({ generatedData }) => {
  const [editMode, setEditMode] = useState(false)
  const { mintProfileNFT, loading, errors, result } = useCreateProfileNFT()
  const router = useRouter()

  const { control, formState, watch, setValue, getValues } =
    useForm<AppProfile.FormData>({ defaultValues: { ...generatedData } })

  useEffect(() => {
    if (result) {
      router.push(`/profile/${result.profileId.toNumber()}`)
    }
  }, [result])

  const save = async () => {
    await mintProfileNFT(
      getValues().name,
      getValues().introduction,
      getValues().imageURI,
      getValues().nfts,
      getValues().poaps,
      getValues().snsAccounts,
      getValues().skills
    )
  }

  return (
    <Box
      backgroundImage="url('../../images/profile/header_bg.png')"
      backgroundSize="cover"
    >
      <Box backgroundColor="primary.300" py={3}>
        <Container maxWidth="800px">
          <Flex alignItems="center">
            <Text fontWeight="bold" mr={5}>
              Your profile has been generated!
            </Text>
            <Button
              bgGradient="linear(to-l, #F8C1C4, #D9D8D8)"
              mr={2}
              onClick={() => setEditMode(!editMode)}
              borderRadius="full"
              minW="80px"
            >
              {editMode ? 'Preview' : 'Edit'}
            </Button>
            <Button
              bgGradient="linear(to-b, pinkbuttonlight, pinkbutton)"
              colorScheme="pink"
              color="white"
              onClick={() => save()}
              isLoading={loading}
              borderRadius="full"
            >
              Save Profile
            </Button>
          </Flex>
          {errors && JSON.stringify(errors)}
        </Container>
      </Box>
      <Container maxWidth="800px">
        {editMode ? (
          <ProfileForm
            watch={watch}
            setValue={setValue}
            getValues={getValues}
            onSubmit={save}
            control={control}
            loading={loading}
            formState={formState}
          />
        ) : (
          <ProfileMain
            isPreview={true}
            pfpURI={getValues()?.imageURI}
            name={getValues()?.name}
            introduction={getValues()?.introduction}
            modules={[
              { type: 'snsAccounts', data: getValues().snsAccounts },
              { type: 'icecandyFriends', data: [] },
              { type: 'skills', data: getValues().skills },
              { type: 'nftCollection', data: getValues().nfts },
              { type: 'poapCollection', data: getValues().poaps },
              { type: 'icecandies', data: [] },
            ]}
          />
        )}

        <Box
          position="fixed"
          bottom={0}
          left="50%"
          transform="translate(0, -50%)"
        >
          <Confetti />
        </Box>
      </Container>
    </Box>
  )
}

export default ProfileGenerated
