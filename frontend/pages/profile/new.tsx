import { Container, Grid, GridItem } from '@chakra-ui/react'
import { ChainId } from '@thirdweb-dev/sdk'
import { OwnedNft } from 'alchemy-sdk'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ProfileForm from '../../components/organisms/profile/Form'
import ProfileMain from '../../components/organisms/profile/Main'
import { useCreateProfileNFT } from '../../hooks/useProfileContract'
import { useHoldingNFTs } from '../../hooks/useToken'
import { INFTCollectionModule } from '../../types/contracts'
import { AppProfile } from '../../types/profile'

const ProfileNewPage: NextPage = () => {
  const { mintProfileNFT, loading, errors, result } = useCreateProfileNFT()
  const router = useRouter()

  useEffect(() => {
    if (result) {
      router.push(`/profile/${result.profileId.toNumber()}`)
    }
  }, [result])

  const { handleSubmit, control, getValues, watch, formState } =
    useForm<AppProfile.FormData>({
      defaultValues: {
        handle: '',
        imageURI: 'https://bit.ly/dan-abramov',
        nfts: [],
      },
    })

  const { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb } =
    useHoldingNFTs()

  const parseNFTsForm2Contract = (nfts: AppProfile.FormData['nfts']) => {
    const parsedNFTs: INFTCollectionModule.NFTStructStruct[] = nfts.map(
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
          tokenURI: JSON.stringify(nft?.rawMetadata),
          wallet: '',
        }
      }
    )

    return parsedNFTs
  }

  const execute = async (data: AppProfile.FormData) => {
    await mintProfileNFT(
      data.handle,
      data.imageURI,
      parseNFTsForm2Contract(data.nfts)
    )
  }

  return (
    <Container maxWidth={900}>
      <Grid gridTemplateColumns="400px 1fr">
        <GridItem>
          <ProfileForm
            {...{
              onSubmit: handleSubmit(execute),
              watch,
              control,
              getValues,
              loading,
              formState,
            }}
          />
        </GridItem>
        <GridItem ml={5} p={8} border="1px solid grey" borderRadius={10}>
          <ProfileMain
            handle={watch('handle')}
            pfpURI={watch('imageURI')}
            modules={[
              {
                type: 'nftCollection',
                data: parseNFTsForm2Contract(watch('nfts')),
              },
            ]}
          />
        </GridItem>
      </Grid>
      {errors && JSON.stringify(errors)}
    </Container>
  )
}

export default ProfileNewPage
