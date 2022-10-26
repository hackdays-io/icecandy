import {
  Box,
  Button,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useHoldingNFTs } from '../../hooks/useToken'
import ModalBase from '../atoms/ModalBase'
import NFTCard from '../atoms/tokens/NFTCard'

const NFTListModal: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb } =
    useHoldingNFTs()

  return (
    <>
      <Button colorScheme="blue" onClick={() => onOpen()}>
        保有NFTリスト
      </Button>
      <ModalBase isOpen={isOpen} onClose={onClose} maxWidth="800">
        <Box>
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
                    <ListItem mb={3} p={3} border="1px solid grey" key={index}>
                      <NFTCard
                        collectionName={nft.contract.name}
                        title={nft.title}
                        imageURI={nft.rawMetadata?.image}
                      />
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
                    <ListItem mb={3} p={3} border="1px solid grey" key={index}>
                      <NFTCard
                        collectionName={nft.contract.name}
                        title={nft.title}
                        imageURI={nft.rawMetadata?.image}
                      />
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
                    <ListItem mb={3} p={3} border="1px solid grey" key={index}>
                      <NFTCard
                        collectionName={nft.contract.name}
                        title={nft.title}
                        imageURI={nft.rawMetadata?.image}
                      />
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ModalBase>
    </>
  )
}

export default NFTListModal
