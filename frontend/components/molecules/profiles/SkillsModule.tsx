import { Box, Grid, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SentIceCandy } from '../../../hooks/useIceCandy'
import { ISkillModule } from '../../../types/contracts'
import { ModuleTypeAddress } from '../../../utils/moduleType2Address'
import SendIceCandyButton from '../../atoms/profile/SendIceCandyButton'

type Props = {
  skills: ISkillModule.SkillStructStruct[]
  wallets?: string[]
  isPreview?: boolean
  receivedIceCandies?: SentIceCandy[]
}

const ProfileSkillsModule: FC<Props> = ({
  skills,
  wallets,
  isPreview,
  receivedIceCandies,
}) => {
  const router = useRouter()
  const { profileId } = router.query
  const address = useAddress()

  return (
    <Box p={5} borderRadius={10} boxShadow="0 0 10px 10px #ecf3ff" my={8}>
      <Text fontWeight="bold" fontSize="20px" mb={5}>
        Skills
      </Text>

      <Grid
        gridTemplateColumns="repeat(2, minmax(100px, 1fr))"
        gridGap={4}
        gridAutoRows="1fr"
      >
        {skills?.map((skill, index) => (
          <Box textAlign="center">
            <Box
              border="2px solid"
              borderColor="gray.300"
              textAlign="left"
              p={2}
            >
              <Text fontWeight="bold" mb={2}>
                {skill.name.toString()}
              </Text>
              <Text mb={2}>{skill.description.toString()}</Text>
              <Text mb={2}>
                <a href={skill.link.toString()}>{skill.link.toString()}</a>
              </Text>
            </Box>

            <Box fontSize="11px">
              アイスキャンディの数
              {
                receivedIceCandies?.filter(
                  (ic) =>
                    ic.module === ModuleTypeAddress.skill &&
                    ic.moduleId === index + 1
                ).length
              }
            </Box>
            {!isPreview && !wallets?.includes(String(address)) && (
              <SendIceCandyButton
                profileId={Number(profileId)}
                module="skill"
                moduleId={index + 1}
              />
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default ProfileSkillsModule
