import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import { OwnedNft } from "alchemy-sdk";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ProfileForm from "../../components/organisms/profile/Form";
import ProfileMain from "../../components/organisms/profile/Main";
import { useENSName } from "../../hooks/useENS";
import { useCreateProfileNFT } from "../../hooks/useProfileContract";
import { useHoldingNFTs } from "../../hooks/useToken";
import { INFTCollectionModule } from "../../types/contracts";
import { AppProfile } from "../../types/profile";

const ProfileNewPage: NextPage = () => {
  const { mintProfileNFT, loading, errors, result } = useCreateProfileNFT();
  const router = useRouter();
  const address = useAddress();
  const { ensName, loading: loadingENS, errors: errorENS } = useENSName();
  useEffect(() => {
    console.log(result, "result");
    if (result) {
      router.push(`/profile/${result.profileId.toNumber()}`);
    }
  }, [result]);

  const { handleSubmit, control, getValues, watch, formState, setValue } =
    useForm<AppProfile.FormData>({
      defaultValues: {
        name: "",
        introduction: "",
        imageURI: "https://bit.ly/dan-abramov",
        nfts: [],
        snsAccounts: [],
      },
    });

  const { holdingNFTsOnEth, holdingNFTsOnPolygon, holdingNFTsOnArb } =
    useHoldingNFTs();

  const parseNFTsForm2Contract = (nfts: AppProfile.FormData["nfts"]) => {
    const parsedNFTs: INFTCollectionModule.NFTStructStruct[] = nfts.map(
      ({ chain, index }) => {
        let nft!: OwnedNft | undefined;
        switch (chain) {
          case ChainId.Goerli:
            nft = holdingNFTsOnEth?.ownedNfts[index];
            break;
          case ChainId.Mumbai:
            nft = holdingNFTsOnPolygon?.ownedNfts[index];
            break;
          case ChainId.ArbitrumGoerli:
            nft = holdingNFTsOnArb?.ownedNfts[index];
            break;
        }

        return {
          chainId: ChainId.Goerli,
          contractAddress: String(nft?.contract.address),
          tokenId: Number(nft?.tokenId),
          tokenURI: JSON.stringify(nft?.rawMetadata),
          owner: address || "",
        };
      }
    );

    return parsedNFTs;
  };

  const execute = async (data: AppProfile.FormData) => {
    await mintProfileNFT(
      data.name,
      data.introduction,
      data.imageURI,
      parseNFTsForm2Contract(data.nfts),
      data.snsAccounts
    );
  };

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
              setValue,
            }}
          />
        </GridItem>
        <GridItem ml={5} p={8} border="1px solid grey" borderRadius={10}>
          <ProfileMain
            name={watch("name")}
            introduction={watch("introduction")}
            pfpURI={watch("imageURI")}
            modules={[
              {
                type: "ensName",
                data: ensName,
              },
              {
                type: "snsAccounts",
                data: watch("snsAccounts") as any,
              },
              {
                type: "nftCollection",
                data: parseNFTsForm2Contract(watch("nfts")) as any,
                loading: loadingENS,
              },
            ]}
          />
        </GridItem>
      </Grid>
      {errors && JSON.stringify(errors)}
    </Container>
  );
};

export default ProfileNewPage;
