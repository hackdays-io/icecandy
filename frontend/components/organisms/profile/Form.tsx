import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Grid,
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
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'
import { ChainId } from '@thirdweb-dev/sdk'
import { OwnedNft } from 'alchemy-sdk'
import { BigNumber } from 'ethers'
import { find } from 'lodash'
import { FC, FormEventHandler, useCallback } from 'react'
import {
  Control,
  Controller,
  FormState,
  useFieldArray,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import { useHoldingNFTs, useHoldingPOAPs } from '../../../hooks/useToken'
import {
  INFTCollectionModule,
  ISNSAccountModule,
} from '../../../types/contracts'
import { AppProfile } from '../../../types/profile'
import ModalBase from '../../atoms/ModalBase'
import AuthTwitter from '../../atoms/profile/AuthTwitter'
import PFP from '../../atoms/profile/PFP'
import SingleNFT from '../../atoms/profile/SingleNFT'
import SinglePOAP from '../../atoms/profile/SinglePOAP'
import NFTCard from '../../atoms/tokens/NFTCard'

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
  watch: UseFormWatch<AppProfile.FormData>
  control: Control<AppProfile.FormData, any>
  getValues: () => AppProfile.FormData
  loading: boolean
  formState: FormState<AppProfile.FormData>
  setValue: UseFormSetValue<AppProfile.FormData>
}

const ProfileForm: FC<Props> = ({
  onSubmit,
  watch,
  control,
  getValues,
  loading,
  setValue,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const {
    isOpen: poapIsOpen,
    onClose: poapOnClose,
    onOpen: poapOnOpen,
  } = useDisclosure()
  const { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb } =
    useHoldingNFTs()
  const { holdingPOAPs } = useHoldingPOAPs()
  const address = useAddress()

  const handleCheck = (targetNft: OwnedNft, chainId: ChainId) => {
    const { nfts } = getValues()

    const newNfts: INFTCollectionModule.NFTStructStruct[] = find(nfts, {
      contractAddress: targetNft.contract.address,
      tokenId: targetNft.tokenId,
      chainId,
    })
      ? nfts?.filter(
          (nft) =>
            nft.chainId !== chainId ||
            nft.contractAddress !== targetNft.contract.address ||
            nft.tokenId !== targetNft.tokenId
        )
      : [
          ...(nfts ?? []),
          {
            chainId,
            contractAddress: targetNft.contract.address,
            tokenId: targetNft.tokenId,
            tokenURI: targetNft.tokenUri?.raw || '',
            owner: address || '',
          },
        ]
    return newNfts
  }

  const handlePoapCheck = (targetNft: OwnedNft) => {
    const { poaps } = getValues()

    console.log(targetNft)

    const newPoaps: INFTCollectionModule.NFTStructStruct[] = find(poaps, {
      contractAddress: targetNft.contract.address,
      tokenId: targetNft.tokenId,
    })
      ? poaps?.filter(
          (poap) =>
            poap.contractAddress !== targetNft.contract.address ||
            poap.tokenId !== targetNft.tokenId
        )
      : [
          ...(poaps ?? []),
          {
            chainId: BigNumber.from(100),
            contractAddress: targetNft.contract.address,
            tokenId: targetNft.tokenId,
            tokenURI: targetNft.tokenUri?.raw || '',
            owner: address || '',
          },
        ]
    return newPoaps
  }

  const setSNSAccount = useCallback(
    (params: ISNSAccountModule.SNSAccountStructStruct) => {
      const { snsAccounts } = getValues()
      snsAccounts.push(params)
      setValue('snsAccounts', snsAccounts)
    },
    [address]
  )

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: 'skills',
  })

  return (
    <form onSubmit={onSubmit}>
      <Box backgroundColor="gray.200" borderRadius={10} mt={6}>
        <Grid gridTemplateColumns="1fr 400px" mb={4} w="50%">
          <PFP imgURI={watch('imageURI')} size="2xl" />
          <Box ml={5} my={3}>
            <Text>名前</Text>
            <Controller
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  backgroundColor="white"
                  borderColor="gray.400"
                />
              )}
              control={control}
              name="name"
            />
            <Text mt={3}>BIO</Text>
            <Controller
              render={({ field }) => (
                <Textarea
                  rows={3}
                  value={field.value}
                  onChange={field.onChange}
                  backgroundColor="white"
                  borderColor="gray.400"
                />
              )}
              control={control}
              name="introduction"
            />
          </Box>
        </Grid>
      </Box>
      {/* <Box my={4}>
        <AuthTwitter setAccountData={setSNSAccount} />
      </Box> */}

      <Box mb={5} backgroundColor="gray.200" p={3} borderRadius={10}>
        <Heading size="md" as="h3" mb={2}>
          Skills
        </Heading>

        <List display="grid" gridTemplateColumns="1fr 1fr" gridGap={3}>
          {skillFields.map((field, index) => (
            <ListItem
              key={field.id}
              backgroundColor="white"
              borderRadius={3}
              p={2}
            >
              <FormLabel fontSize="12px" mt={0} mb={1}>
                スキル名
              </FormLabel>
              <Controller
                control={control}
                name={`skills.${index}.name`}
                render={({ field }) => (
                  <Input
                    value={field.value.toString()}
                    onChange={field.onChange}
                  />
                )}
              />
              <FormLabel fontSize="12px" mt={3} mb={1}>
                説明
              </FormLabel>
              <Controller
                control={control}
                name={`skills.${index}.description`}
                render={({ field }) => (
                  <Textarea
                    rows={3}
                    value={field.value.toString()}
                    onChange={field.onChange}
                  />
                )}
              />
              <FormLabel fontSize="12px" mt={3} mb={1}>
                リンク
              </FormLabel>
              <Controller
                control={control}
                name={`skills.${index}.link`}
                render={({ field }) => (
                  <Input
                    value={field.value.toString()}
                    onChange={field.onChange}
                  />
                )}
              />
              <Button
                width="full"
                size="sm"
                mt={3}
                onClick={() => removeSkill(index)}
              >
                削除
              </Button>
            </ListItem>
          ))}
          <ListItem>
            <Flex
              height="100%"
              minH="80px"
              boxShadow="0 0 3px 2px lightgrey"
              borderRadius={3}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              backgroundColor="white"
              onClick={() =>
                appendSkill({ name: '', description: '', link: '' })
              }
            >
              <Box textAlign="center">
                <AddIcon />
                <Text>Add Skill</Text>
              </Box>
            </Flex>
          </ListItem>
        </List>
      </Box>

      <Box mb={5} backgroundColor="gray.200" p={3} borderRadius={10}>
        <Heading size="md" as="h3" mb={2}>
          Favorite NFTs
        </Heading>

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
                    <Controller
                      key={`eth${index}`}
                      name="nfts"
                      control={control}
                      render={({ field: { value, onChange } }) => {
                        const selected = !!find(value, {
                          contractAddress: nft.contract.address,
                          tokenId: nft.tokenId,
                          chainId: ChainId.Goerli,
                        })
                        return (
                          <ListItem
                            mb={3}
                            p={3}
                            backgroundColor={selected ? 'blue.100' : 'white'}
                            borderRadius={5}
                            boxShadow="0 0 6px 0 lightgrey"
                          >
                            <label>
                              <Checkbox
                                size="lg"
                                defaultChecked={selected}
                                onChange={() =>
                                  onChange(handleCheck(nft, ChainId.Goerli))
                                }
                              />
                              <NFTCard
                                collectionName={nft.contract.name}
                                title={nft.title}
                                imageURI={nft.rawMetadata?.image}
                              />
                            </label>
                          </ListItem>
                        )
                      }}
                    />
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
                    <Controller
                      key={`polygon${index}`}
                      name="nfts"
                      control={control}
                      render={({ field: { value, onChange } }) => {
                        const selected = !!find(value, {
                          contractAddress: nft.contract.address,
                          tokenId: nft.tokenId,
                          chainId: ChainId.Mumbai,
                        })
                        return (
                          <ListItem
                            mb={3}
                            p={3}
                            backgroundColor={selected ? 'blue.100' : 'white'}
                            borderRadius={5}
                            boxShadow="0 0 6px 0 lightgrey"
                          >
                            <label>
                              <Checkbox
                                size="lg"
                                defaultChecked={selected}
                                onChange={() =>
                                  onChange(handleCheck(nft, ChainId.Mumbai))
                                }
                              />
                              <NFTCard
                                collectionName={nft.contract.name}
                                title={nft.title}
                                imageURI={nft.rawMetadata?.image}
                              />
                            </label>
                          </ListItem>
                        )
                      }}
                    />
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
                    <Controller
                      key={`arb${index}`}
                      name="nfts"
                      control={control}
                      render={({ field: { value, onChange } }) => {
                        const selected = !!find(value, {
                          contractAddress: nft.contract.address,
                          tokenId: nft.tokenId,
                          chainId: ChainId.ArbitrumGoerli,
                        })
                        return (
                          <ListItem
                            mb={3}
                            p={3}
                            backgroundColor={selected ? 'blue.100' : 'white'}
                            borderRadius={5}
                            boxShadow="0 0 6px 0 lightgrey"
                          >
                            <label>
                              <Checkbox
                                size="lg"
                                defaultChecked={selected}
                                onChange={() =>
                                  onChange(
                                    handleCheck(nft, ChainId.ArbitrumGoerli)
                                  )
                                }
                              />
                              <NFTCard
                                collectionName={nft.contract.name}
                                title={nft.title}
                                imageURI={nft.rawMetadata?.image}
                              />
                            </label>
                          </ListItem>
                        )
                      }}
                    />
                  ))}
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBase>

        <List
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
          gridGap={3}
        >
          {watch('nfts').map((nft) => (
            <ListItem
              mb={3}
              p={3}
              key={`${nft.chainId}${nft.contractAddress}${nft.tokenId}`}
            >
              <SingleNFT nft={nft} />
            </ListItem>
          ))}
          <ListItem mb={3} p={3}>
            <Flex
              height="100%"
              minH="80px"
              boxShadow="0 0 3px 2px lightgrey"
              borderRadius={3}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={onOpen}
              backgroundColor="white"
            >
              <Box textAlign="center">
                <AddIcon />
                <Text>Add NFT</Text>
              </Box>
            </Flex>
          </ListItem>
        </List>
      </Box>

      <Box mb={5} backgroundColor="gray.200" p={3} borderRadius={10}>
        <Heading size="md" as="h3" mb={2}>
          POAPs
        </Heading>

        <ModalBase isOpen={poapIsOpen} onClose={poapOnClose} maxWidth="800">
          <List
            display="grid"
            gridTemplateColumns="1fr 1fr 1fr"
            gridGap={3}
            py={10}
          >
            {holdingPOAPs?.ownedNfts.map((poap, index) => (
              <Controller
                key={`poap${index}`}
                name="poaps"
                control={control}
                render={({ field: { value, onChange } }) => {
                  const selected = !!find(value, {
                    contractAddress: poap.contract.address,
                    tokenId: poap.tokenId,
                  })
                  return (
                    <ListItem
                      mb={3}
                      p={3}
                      backgroundColor={selected ? 'blue.100' : 'white'}
                      borderRadius={5}
                      boxShadow="0 0 6px 0 lightgrey"
                    >
                      <label>
                        <Checkbox
                          size="lg"
                          defaultChecked={selected}
                          onChange={() => onChange(handlePoapCheck(poap))}
                        />
                        <NFTCard
                          collectionName={poap.contract.name}
                          title={poap.title}
                          imageURI={poap.rawMetadata?.image_url}
                        />
                      </label>
                    </ListItem>
                  )
                }}
              />
            ))}
          </List>
        </ModalBase>

        <List
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
          gridGap={3}
        >
          {watch('poaps').map((poap) => (
            <ListItem
              mb={3}
              p={3}
              key={`${poap.contractAddress}${poap.tokenId}`}
            >
              <SinglePOAP poap={poap} />
            </ListItem>
          ))}
          <ListItem mb={3} p={3}>
            <Flex
              height="100%"
              minH="80px"
              boxShadow="0 0 3px 2px lightgrey"
              borderRadius={3}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={poapOnOpen}
              backgroundColor="white"
            >
              <Box textAlign="center">
                <AddIcon />
                <Text>Add POAP</Text>
              </Box>
            </Flex>
          </ListItem>
        </List>
      </Box>
    </form>
  )
}

export default ProfileForm
