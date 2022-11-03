import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

const profileData = (owner: SignerWithAddress) => ({
  name: 'hogehoge',
  introduction: 'fugafuga',
  imageURI: 'https://image.com',
  nfts: [
    {
      chainId: 1,
      contractAddress: '0x0000000000000000000000000000000000000001',
      tokenId: 1,
      tokenURI: '',
      owner: owner.address,
    },
    {
      chainId: 137,
      contractAddress: '0x0000000000000000000000000000000000000001',
      tokenId: 1,
      tokenURI: 'https://polygon.com/1',
      owner: owner.address,
    },
  ],
  poaps: [
    {
      chainId: 1,
      contractAddress: '0x0000000000000000000000000000000000000002',
      tokenId: 2,
      tokenURI: '',
      owner: owner.address,
    },
    {
      chainId: 137,
      contractAddress: '0x0000000000000000000000000000000000000002',
      tokenId: 2,
      tokenURI: 'https://polygon.com/2',
      owner: owner.address,
    },
  ],
  snsAccounts: [
    {
      service: 'twitter',
      userId: 'hello',
      userPageURL: 'https://hoge.com',
      wallet: owner.address,
    },
  ],
})

const nftData = (owner: SignerWithAddress) => [
  {
    chainId: 1,
    contractAddress: '0x0000000000000000000000000000000000000003',
    tokenId: 3,
    tokenURI: '',
    owner: owner.address,
  },
  {
    chainId: 137,
    contractAddress: '0x0000000000000000000000000000000000000003',
    tokenId: 3,
    tokenURI: 'https://polygon.com/3',
    owner: owner.address,
  },
  {
    chainId: 592,
    contractAddress: '0x0000000000000000000000000000000000000003',
    tokenId: 3,
    tokenURI: 'https://astar.com/3',
    owner: owner.address,
  },
]

const nftData2 = (owner: SignerWithAddress) => [
  {
    chainId: 1,
    contractAddress: '0x0000000000000000000000000000000000000005',
    tokenId: 5,
    tokenURI: '',
    owner: owner.address,
  },
  {
    chainId: 56,
    contractAddress: '0x0000000000000000000000000000000000000003',
    tokenId: 5,
    tokenURI: 'https://binance.com/5',
    owner: owner.address,
  },
  {
    chainId: 137,
    contractAddress: '0x0000000000000000000000000000000000000005',
    tokenId: 5,
    tokenURI: 'https://polygon.com/5',
    owner: owner.address,
  },
  {
    chainId: 592,
    contractAddress: '0x0000000000000000000000000000000000000003',
    tokenId: 5,
    tokenURI: 'https://astar.com/5',
    owner: owner.address,
  },
]

const nftData3 = (owner: SignerWithAddress) => [
  {
    chainId: 1,
    contractAddress: '0x0000000000000000000000000000000000000006',
    tokenId: 6,
    tokenURI: '',
    owner: owner.address,
  },
  {
    chainId: 56,
    contractAddress: '0x0000000000000000000000000000000000000006',
    tokenId: 6,
    tokenURI: 'https://binance.com/6',
    owner: owner.address,
  },
  {
    chainId: 137,
    contractAddress: '0x0000000000000000000000000000000000000006',
    tokenId: 6,
    tokenURI: 'https://polygon.com/6',
    owner: owner.address,
  },
  {
    chainId: 592,
    contractAddress: '0x0000000000000000000000000000000000000006',
    tokenId: 6,
    tokenURI: 'https://astar.com/6',
    owner: owner.address,
  },
]

const poapData = (owner: SignerWithAddress) => [
  {
    chainId: 1,
    contractAddress: '0x0000000000000000000000000000000000000004',
    tokenId: 4,
    tokenURI: '',
    owner: owner.address,
  },
  {
    chainId: 56,
    contractAddress: '0x0000000000000000000000000000000000000004',
    tokenId: 4,
    tokenURI: 'https://binance.com/4',
    owner: owner.address,
  },
  {
    chainId: 137,
    contractAddress: '0x0000000000000000000000000000000000000004',
    tokenId: 4,
    tokenURI: 'https://polygon.com/4',
    owner: owner.address,
  },
]

const mirrorData = () => ({
  hoge: 'fuga',
})

const skillData = () => ({
  name: 'development',
  description: 'I have over 10 years of experience in development.',
  link: 'https://github.com/hoge',
})

const snsData = (owner: SignerWithAddress) => [
  {
    service: 'github',
    userId: 'hello_world',
    userPageURL: 'https://github.com/hello_world',
    wallet: owner.address,
  },
  {
    service: 'twitter',
    userId: 'hello',
    userPageURL: 'https://twitter.com/hello',
    wallet: owner.address,
  },
]

const tokenURI = {
  revealed: 'ipfs://bafybeidz4y2gefriqjhssflnn7zxwi344gk7w2f3x46xdkw5zfiea4fqhu/revealed.json',
  notRevealed: 'ipfs://bafybeiabmfgk77xiv3bhje5zgwgymk7vhfpimvkhqjo55qw44q43cj2fne/unrevealed.json',
  lucky: 'ipfs://bafybeicokrwwzly5fcyidlmi6clabk3mnimvkcaoiywzzx75wyffxygoxm/lucky.json',
  unlucky: 'ipfs://bafybeifdlahtcdtr67jvvnruu5oh6v3tihvftpbk22c7lo6jwqtxaqcgz4/uncky.json',
}

export { profileData, nftData, nftData2, nftData3, poapData, mirrorData, skillData, snsData, tokenURI }
