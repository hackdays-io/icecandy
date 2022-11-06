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
  skills: [
    {
      name: 'development',
      description: 'I have over 10 years of experience in development.',
      link: 'https://github.com/hoge',
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
  revealed: 'ipfs://bafybeifctlot4tutf5nhneplhfsxg3odmssthqdxkyd465mj6qmr2hdiju/revealed.json',
  notRevealed: 'ipfs://bafybeiccuu3uekihc5p6sli3h7475tbe3vebqhivbdspkb66g53l4dd53q/unrevealed.json',
  lucky: 'ipfs://bafybeiheoxsupdmgyzh7leeqvtxhy4b52w3htqulyyyjxzxnzneeinkre4/lucky.json',
  unlucky: 'ipfs://bafybeieciejro4qj4c6b2unxor37truqmslinuxwn7fdlriipzzfsofd6y/unlucky.json',
}

export { profileData, nftData, nftData2, nftData3, poapData, mirrorData, skillData, snsData, tokenURI }
