import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Heading,
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
import { FC, FormEventHandler } from 'react'
import { Control, Controller, FormState, UseFormWatch } from 'react-hook-form'
import { useHoldingNFTs } from '../../../hooks/useToken'
import { AppProfile } from '../../../types/profile'
import ModalBase from '../../atoms/ModalBase'
import PFP from '../../atoms/profile/PFP'
import NFTCard from '../../atoms/tokens/NFTCard'

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
  watch: UseFormWatch<AppProfile.FormData>
  control: Control<AppProfile.FormData, any>
  getValues: () => AppProfile.FormData
  loading: boolean
  formState: FormState<AppProfile.FormData>
}

const ProfileForm: FC<Props> = ({
  onSubmit,
  watch,
  control,
  getValues,
  loading,
  formState,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb } =
    useHoldingNFTs()

  console.log(holdingNFTsOnPolygon?.ownedNfts)

  const handleCheck = (index: number, chain: ChainId) => {
    const { nfts } = getValues()

    const newIds = find(nfts, { index, chain })
      ? nfts?.filter(
          (nft) => JSON.stringify(nft) !== JSON.stringify({ chain, index })
        )
      : [...(nfts ?? []), { chain, index }]
    return newIds
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
    <form onSubmit={onSubmit}>
      <Box mb={2}>
        <PFP imgURI={watch('imageURI')} />
      </Box>
      <Box mb={5}>
        <Text>ハンドル名</Text>
        <Controller
          render={({ field }) => (
            <Input value={field.value} onChange={field.onChange} />
          )}
          control={control}
          name="handle"
        />
      </Box>

      <Box mb={5} backgroundColor="gray.100" p={3} borderRadius={10}>
        <Heading size="md" as="h3" mb={2}>
          NFTコレクション
        </Heading>

        <Box mb={5}>
          <Text mb={2}>コレクション名</Text>
          <Controller
            render={({ field }) => (
              <Input
                backgroundColor="white"
                placeholder="コレクション名を入力してください"
              />
            )}
            control={control}
            name="handle"
          />
        </Box>

        <ModalBase isOpen={isOpen} onClose={onClose} maxWidth="600">
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
              boxShadow="0 0 3px 2px lightgrey"
              borderRadius={3}
              key={`${nft.chain}${nft.index}`}
              height={180}
              overflow="hidden"
              backgroundColor="white"
            >
              <Box>
                <SelectedNft chain={nft.chain} index={nft.index} />
              </Box>
            </ListItem>
          ))}
          <ListItem
            mb={3}
            p={3}
            boxShadow="0 0 3px 2px lightgrey"
            borderRadius={3}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={onOpen}
            height={180}
            backgroundColor="white"
          >
            <Box textAlign="center">
              <AddIcon />
              <Text>Add NFT</Text>
            </Box>
          </ListItem>
        </List>
      </Box>

      <Button width="full" colorScheme="blue" type="submit" isLoading={loading}>
        プロフィール生成
      </Button>
    </form>
  )
}

export default ProfileForm
