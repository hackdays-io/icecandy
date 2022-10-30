import { FC, useEffect } from 'react'
import { AppProfile } from '../../../types/profile'
import ProfileMain from './Main'
import { useReward } from 'react-rewards'
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import { useCreateProfileNFT } from '../../../hooks/useProfileContract'
import { useRouter } from 'next/router'

type Props = {
  generatedData: AppProfile.FormData
}

const ProfileGenerated: FC<Props> = ({ generatedData }) => {
  const { mintProfileNFT, loading, errors, result } = useCreateProfileNFT()
  const router = useRouter()
  const { reward: confettiReward } = useReward('confettiReward', 'confetti', {
    elementCount: 300,
    lifetime: 200,
    spread: 120,
  })

  useEffect(() => {
    confettiReward()
  }, [])

  useEffect(() => {
    if (result) {
      router.push(`/profile/${result.profileId.toNumber()}`)
    }
  }, [result])

  const save = async () => {
    await mintProfileNFT(
      generatedData.name,
      generatedData.introduction,
      generatedData.imageURI,
      generatedData.nfts,
      generatedData.poaps,
      generatedData.snsAccounts
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
            <Button mr={2}>編集する</Button>
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
        <ProfileMain
          pfpURI={generatedData?.name}
          name={generatedData?.name}
          introduction={generatedData?.introduction}
          modules={[
            { type: 'snsAccounts', data: generatedData.snsAccounts },
            { type: 'nftCollection', data: generatedData.nfts },
            { type: 'poapCollection', data: generatedData.poaps },
          ]}
        />
        <Box textAlign="center">
          <span id="confettiReward" />
        </Box>
      </Container>
    </>
  )
}

export default ProfileGenerated
