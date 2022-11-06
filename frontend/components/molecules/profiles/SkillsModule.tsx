import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SentIceCandy } from '../../../hooks/useIceCandy'
import { ISkillModule } from '../../../types/contracts'
import { ModuleTypeAddress } from '../../../utils/moduleType2Address'
import SendIceCandyButton from '../../atoms/profile/SendIceCandyButton'
import SkillBox from './SkillBox'

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
    <>
      <Heading as="h2" fontWeight="bold" fontSize="20px" mt={4}>
        Skills
      </Heading>
      <Box p={5} borderRadius={10} my={2} backgroundColor="itemsback">
        <Grid
          gridTemplateColumns="repeat(2, minmax(100px, 1fr))"
          gridGap={4}
          gridAutoRows="1fr"
        >
          {skills?.map((skill, index) => (
            <SkillBox
              key={index}
              name={skill.name.toString()}
              description={skill.description.toString()}
              href={skill.link.toString()}
              isAcceptCandy={!isPreview && !wallets?.includes(String(address))}
              profileid={Number(profileId)}
              numOfIceCandy={
                receivedIceCandies?.filter(
                  (ic) =>
                    ic.module === ModuleTypeAddress.skill &&
                    ic.moduleId === index + 1
                ).length
              }
            ></SkillBox>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ProfileSkillsModule
