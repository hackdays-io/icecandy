import {
  Box,
  Button,
  Checkbox,
  Container,
  Input,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ModalBase from '../../components/atoms/ModalBase'
import NFTImage from '../../components/atoms/NFTImage'
import { useCreateProfileNFT } from '../../hooks/useProfileContract'
import { useHoldingNFTs } from '../../hooks/useToken'
import { INFTCollectionModule } from '../../types/contracts'

type FormData = {
  handle: string
  imageURI: string
  nfts: number[]
}

const ProfileNewPage: NextPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { mintProfileNFT, loading, errors, result } = useCreateProfileNFT()
  const router = useRouter()

  useEffect(() => {
    if (result) {
      router.push(`/profile/${result.profileId.toNumber()}`)
    }
  }, [result])

  const { handleSubmit, control, getValues, watch, formState } =
    useForm<FormData>({
      defaultValues: {
        handle: '',
        imageURI: '',
        nfts: [],
      },
    })

  const { holdingNFTs } = useHoldingNFTs()

  const handleCheck = (index: number) => {
    const { nfts } = getValues()
    const newIds = nfts?.includes(index)
      ? nfts?.filter((id) => id !== index)
      : [...(nfts ?? []), index]
    return newIds
  }

  const execute = async (data: FormData) => {
    const nfts: INFTCollectionModule.NFTStructStruct[] = data.nfts.map(
      (index) => {
        const nft = holdingNFTs[index]
        return {
          chainId: 0,
          contractAddress: String(nft.contractAddress),
          tokenId: Number(nft.tokenId),
          tokenURI: String(nft.tokenURI),
        }
      }
    )
    await mintProfileNFT(data.handle, data.imageURI, nfts)
  }

  return (
    <Container maxWidth={780}>
      <form onSubmit={handleSubmit(execute)}>
        <Box mb={2}>
          <Text>ハンドル名</Text>
          <Controller
            render={({ field }) => (
              <Input value={field.value} onChange={field.onChange} />
            )}
            control={control}
            name="handle"
          />
        </Box>
        <Box mb={2}>
          <Text>プロフィールイメージURI</Text>
          <Controller
            render={({ field }) => (
              <Input value={field.value} onChange={field.onChange} />
            )}
            control={control}
            name="imageURI"
          />
        </Box>
        <Box mb={2}>
          <Text>NFTs</Text>
          <Button onClick={onOpen}>NFT選択</Button>
          <ModalBase isOpen={isOpen} onClose={onClose} maxWidth="800">
            <List display="grid" gridTemplateColumns="1fr 1fr 1fr" gridGap={3}>
              {holdingNFTs.map((nft, index) => (
                <ListItem mb={3} p={3} border="1px solid grey" key={index}>
                  <label>
                    <Controller
                      name="nfts"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Checkbox
                          defaultChecked={value.includes(index)}
                          onChange={() => onChange(handleCheck(index))}
                        />
                      )}
                    />
                    <Text>{nft.collectionName}</Text>
                    <Text>{nft.name}</Text>
                    <NFTImage url={nft.image} />
                  </label>
                </ListItem>
              ))}
            </List>
          </ModalBase>
          <List display="grid" gridTemplateColumns="1fr 1fr 1fr" gridGap={3}>
            {watch('nfts').map((index) => (
              <ListItem mb={3} p={3} border="1px solid grey" key={index}>
                <label>
                  <Text>{holdingNFTs[index].collectionName}</Text>
                  <Text>{holdingNFTs[index].name}</Text>
                  <NFTImage url={holdingNFTs[index].image} />
                </label>
              </ListItem>
            ))}
          </List>
        </Box>

        <Button
          width="full"
          colorScheme="blue"
          type="submit"
          isLoading={loading}
        >
          プロフィール生成
        </Button>
        {JSON.stringify(errors)}
        {formState.isSubmitSuccessful && 'success!'}
      </form>
    </Container>
  )
}

export default ProfileNewPage
