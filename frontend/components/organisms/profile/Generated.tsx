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
    <>
      <Box backgroundColor="yellow.100" py={3} mb={5}>
        <Container maxWidth="800px">
          <Flex alignItems="center">
            <Text fontWeight="bold" mr={5}>
              オンチェーンデータからプロフィールが生成されました！
            </Text>
            <Button mr={2} onClick={() => setEditMode(!editMode)}>
              {editMode ? 'プレビュー' : '編集する'}
            </Button>
            <Button
              backgroundColor="blue.300"
              color="white"
              onClick={() => save()}
              isLoading={loading}
            >
              このまま保存する
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
            isPreview
            pfpURI={getValues()?.imageURI}
            name={getValues()?.name}
            introduction={getValues()?.introduction}
            modules={[
              { type: 'snsAccounts', data: getValues().snsAccounts },
              { type: 'skills', data: getValues().skills },
              { type: 'nftCollection', data: getValues().nfts },
              { type: 'poapCollection', data: getValues().poaps },
            ]}
          />
        )}

        <Confetti />
      </Container>
    </>
  )
}

export default ProfileGenerated
