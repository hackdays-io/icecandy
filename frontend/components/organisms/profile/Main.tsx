import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AppProfile } from "../../../types/profile";
import PFP from "../../atoms/profile/PFP";
import ProfileENSNameModule from "../../molecules/profiles/ENSNameModule";
import ProfileNFTCollectionModule from "../../molecules/profiles/NFTCollectionModule";
import ProfileSNSAccountsModule from "../../molecules/profiles/SNSAccountsModule";

type Props = {
  pfpURI?: string;
  name?: string;
  introduction?: string;
  modules: [
    AppProfile.Module<"ensName">,
    AppProfile.Module<"snsAccounts">,
    AppProfile.Module<"nftCollection">
  ];
};

const ProfileMain: FC<Props> = ({ pfpURI, name, introduction, modules }) => {
  return (
    <Box>
      <Box textAlign="center" mb={3}>
        <PFP imgURI={pfpURI} />
      </Box>
      <Heading fontSize="24px" textAlign="center" mb={3}>
        {name}
      </Heading>
      <Text mb={4}>{introduction}</Text>
      {modules.map((module, index) => {
        switch (module.type) {
          case "nftCollection":
            return (
              <ProfileNFTCollectionModule nfts={module.data} key={index} />
            );
          case "snsAccounts":
            return (
              <ProfileSNSAccountsModule snsAccounts={module.data} key={index} />
            );
          case "ensName":
            return (
              <ProfileENSNameModule
                name={module.data}
                key={index}
                loading={module.loading}
              />
            );
          default:
            return <></>;
        }
      })}
    </Box>
  );
};

export default ProfileMain;
