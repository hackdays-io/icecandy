import { Box, Grid, Text } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useMemo, useState } from 'react'
import { INFTCollectionModule } from '../../../types/contracts'
import NFTImage from '../../atoms/NFTImage'

type Props = {
  poaps: INFTCollectionModule.NFTStructStruct[]
}

const SingleNFT: FC<{ poap: INFTCollectionModule.NFTStructStruct }> = ({
  poap,
}) => {
  const [tokenURI, setTokenURI] = useState<any>()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(String(poap.tokenURI))
      setTokenURI(data)
    }
    fetch()
  }, [poap])

  return (
    <Box display="inline-block">
      <NFTImage
        size="auto"
        url={tokenURI?.image || tokenURI?.image_url || ''}
      />
    </Box>
  )
}

const ProfilePOAPCollectionModulePreview: FC<Props> = ({ poaps }) => {
  return (
    <Box p={5} borderRadius={10} boxShadow="0 0 10px 10px #ecf3ff" my={8}>
      <Text fontWeight="bold" fontSize="20px" mb={5}>
        POAPs
      </Text>
      <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridGap={2}>
        {poaps?.map((poap, index) => (
          <SingleNFT key={index} {...{ poap }} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProfilePOAPCollectionModulePreview
