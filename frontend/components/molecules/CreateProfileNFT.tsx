import { Box, Button } from '@chakra-ui/react'
import { FC } from 'react'
import { useCreateProfileNFT } from '../../hooks/useProfileContract'

const CreateProfileNFT: FC = () => {
  const { mintProfileNFT, loading, errors } = useCreateProfileNFT()

  return (
    <Box>
      <Button onClick={() => mintProfileNFT()} isLoading={loading}>
        プロフィールNFTをMint
      </Button>
      {JSON.stringify(errors)}
    </Box>
  )
}

export default CreateProfileNFT
