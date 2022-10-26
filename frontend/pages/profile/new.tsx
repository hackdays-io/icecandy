import {
  Box,
  Button,
  Checkbox,
  Container,
  FormLabel,
  Input,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { ChainId } from '@thirdweb-dev/sdk'
import { OwnedNft } from 'alchemy-sdk'
import { find } from 'lodash'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ModalBase from '../../components/atoms/ModalBase'
import NFTImage from '../../components/atoms/NFTImage'
import NFTCard from '../../components/atoms/tokens/NFTCard'
import { useCreateProfileNFT } from '../../hooks/useProfileContract'
import { useHoldingNFTs } from '../../hooks/useToken'
import { INFTCollectionModule } from '../../types/contracts'

type FormData = {
  handle: string
  imageURI: string
  nfts: { chain: ChainId; index: number }[]
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

  const { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb } =
    useHoldingNFTs()

  const handleCheck = (index: number, chain: ChainId) => {
    const { nfts } = getValues()

    const newIds = find(nfts, { index, chain })
      ? nfts?.filter(
          (nft) => JSON.stringify(nft) !== JSON.stringify({ chain, index })
        )
      : [...(nfts ?? []), { chain, index }]
    return newIds
  }

  const execute = async (data: FormData) => {
    const nfts: INFTCollectionModule.NFTStructStruct[] = data.nfts.map(
      ({ chain, index }) => {
        let nft!: OwnedNft | undefined
        switch (chain) {
          case ChainId.Goerli:
            nft = holdingNFTsOnEth?.ownedNfts[index]
            break
          case ChainId.Mumbai:
            nft = holdingNFTsOnPolygon?.ownedNfts[index]
            break
          case ChainId.ArbitrumGoerli:
            nft = holdingNFTsOnArb?.ownedNfts[index]
            break
        }

        return {
          chainId: ChainId.Goerli,
          contractAddress: String(nft?.contract.address),
          tokenId: Number(nft?.tokenId),
          tokenURI: String(nft?.rawMetadata?.tokenURI),
          wallet: '',
        }
      }
    )

    await mintProfileNFT(data.handle, data.imageURI, nfts)
  }

  const SelectedNft: FC<{ chain: ChainId; index: number }> = ({
    chain,
    index,
  }) => {
    let nft!: OwnedNft | undefined
    switch (chain) {
      case ChainId.Goerli:
        nft = holdingNFTsOnEth?.ownedNfts[index]
        break
      case ChainId.Mumbai:
        nft = holdingNFTsOnPolygon?.ownedNfts[index]
        break
      case ChainId.ArbitrumGoerli:
        nft = holdingNFTsOnArb?.ownedNfts[index]
        break
    }
    return (
      <NFTCard
        collectionName={nft?.contract.name}
        title={nft?.title}
        imageURI={nft?.rawMetadata?.image}
      />
    )
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
            <Tabs variant="soft-rounded" colorScheme="blue">
              <TabList>
                <Tab>Ethreum</Tab>
                <Tab>Polygon</Tab>
                <Tab>Arbitrum</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <List
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    gridGap={3}
                  >
                    {holdingNFTsOnEth?.ownedNfts.map((nft, index) => (
                      <ListItem
                        mb={3}
                        p={3}
                        border="1px solid grey"
                        key={`eth${index}`}
                      >
                        <FormLabel>
                          <Controller
                            name="nfts"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <Checkbox
                                defaultChecked={
                                  !!find(value, {
                                    index,
                                    chain: ChainId.Goerli,
                                  })
                                }
                                onChange={() =>
                                  onChange(handleCheck(index, ChainId.Goerli))
                                }
                              />
                            )}
                          />
                          <NFTCard
                            collectionName={nft.contract.name}
                            title={nft.title}
                            imageURI={nft.rawMetadata?.image}
                          />
                        </FormLabel>
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
                <TabPanel>
                  <List
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    gridGap={3}
                  >
                    {holdingNFTsOnPolygon?.ownedNfts.map((nft, index) => (
                      <ListItem
                        mb={3}
                        p={3}
                        border="1px solid grey"
                        key={`polygon${index}`}
                      >
                        <FormLabel>
                          <Controller
                            name="nfts"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <Checkbox
                                defaultChecked={
                                  !!find(value, {
                                    index,
                                    chain: ChainId.Mumbai,
                                  })
                                }
                                onChange={() =>
                                  onChange(handleCheck(index, ChainId.Mumbai))
                                }
                              />
                            )}
                          />
                          <NFTCard
                            collectionName={nft.contract.name}
                            title={nft.title}
                            imageURI={nft.rawMetadata?.image}
                          />
                        </FormLabel>
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
                <TabPanel>
                  <List
                    display="grid"
                    gridTemplateColumns="1fr 1fr 1fr"
                    gridGap={3}
                  >
                    {holdingNFTsOnArb?.ownedNfts.map((nft, index) => (
                      <ListItem
                        mb={3}
                        p={3}
                        border="1px solid grey"
                        key={`arb${index}`}
                      >
                        <FormLabel>
                          <Controller
                            name="nfts"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <Checkbox
                                defaultChecked={
                                  !!find(value, {
                                    index,
                                    chain: ChainId.ArbitrumGoerli,
                                  })
                                }
                                onChange={() =>
                                  onChange(
                                    handleCheck(index, ChainId.ArbitrumGoerli)
                                  )
                                }
                              />
                            )}
                          />
                          <NFTCard
                            collectionName={nft.contract.name}
                            title={nft.title}
                            imageURI={nft.rawMetadata?.image}
                          />
                        </FormLabel>
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBase>
          <List display="grid" gridTemplateColumns="1fr 1fr 1fr" gridGap={3}>
            {watch('nfts').map((nft) => (
              <ListItem
                mb={3}
                p={3}
                border="1px solid grey"
                key={`${nft.chain}${nft.index}`}
              >
                <SelectedNft chain={nft.chain} index={nft.index} />
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
