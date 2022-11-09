import { ethers } from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { IceCandy__factory, Profile__factory } from '../typechain-types'
import * as dotenv from 'dotenv'
const PATH_TO_HARDHAT_ENV = `${__dirname}/.env`
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

async function main() {
  const owner = (await ethers.getSigners())[0] as SignerWithAddress
  const alice = (await ethers.getSigners())[1] as SignerWithAddress
  const bob = (await ethers.getSigners())[2] as SignerWithAddress
  const carol = (await ethers.getSigners())[3] as SignerWithAddress
  const daniel = (await ethers.getSigners())[4] as SignerWithAddress
  const eve = (await ethers.getSigners())[5] as SignerWithAddress

  const aliceProfile = {
    name: 'Alice',
    introduction: "gm! I'm alice",
    imageURI: 'https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png',
    nfts: [
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 5575,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/5575',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a',
        tokenId: 434,
        tokenURI: 'https://token.artblocks.io/434',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 313,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/313',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 111,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/111',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 332,
        tokenURI: 'https://clonex-assets.rtfkt.com/332',
        owner: alice.address,
      },
    ],
    poaps: [
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 1000,
        tokenURI: 'https://api.poap.tech/metadata/28/1000',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 1500,
        tokenURI: 'https://api.poap.tech/metadata/6/1500',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 2000,
        tokenURI: 'https://api.poap.tech/metadata/43/2000',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 2500,
        tokenURI: 'https://api.poap.tech/metadata/43/2500',
        owner: alice.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 3000,
        tokenURI: 'https://api.poap.tech/metadata/56/3000',
        owner: alice.address,
      },
    ],
    snsAccounts: [
      {
        service: 'twitter',
        userId: 'alice',
        userPageURL: 'https://twitter.com/alice',
        wallet: alice.address,
      },
    ],
    skills: [
      {
        name: 'design',
        description: 'I have over 10 years of experience as designer.',
        link: 'https://www.figma.com',
      },
    ],
  }

  const bobProfile = {
    name: 'Bob',
    introduction: "gm! I'm bob",
    imageURI:
      'https://assets.otherside.xyz/otherdeeds/f90cc0a53b610a8d99430b6a7c75359d9dbf6347839cd54bce6b8ab721670026.jpg',
    nfts: [
      {
        chainId: 1,
        contractAddress: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
        tokenId: 111,
        tokenURI: 'https://api.otherside.xyz/lands/111',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 2121,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/2121',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a',
        tokenId: 222,
        tokenURI: 'https://token.artblocks.io/222',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: 21,
        tokenURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/metadata/21',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
        tokenId: 4242,
        tokenURI: 'https://api.otherside.xyz/lands/4242',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
        tokenId: 2121,
        tokenURI: 'https://api.otherside.xyz/lands/2121',
        owner: bob.address,
      },
    ],
    poaps: [
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 3500,
        tokenURI: 'https://api.poap.tech/metadata/54/3500',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 4000,
        tokenURI: 'https://api.poap.tech/metadata/6/4000',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 4500,
        tokenURI: 'https://api.poap.tech/metadata/69/4500',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 5000,
        tokenURI: 'https://api.poap.tech/metadata/69/5000',
        owner: bob.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 5500,
        tokenURI: 'https://api.poap.tech/metadata/93/5500',
        owner: bob.address,
      },
    ],
    snsAccounts: [
      {
        service: 'twitter',
        userId: 'bob',
        userPageURL: 'https://twitter.com/bob',
        wallet: bob.address,
      },
    ],
    skills: [
      {
        name: 'management',
        description: 'I have over 10 years of experience as manager.',
        link: 'https://www.linkedin.com/',
      },
    ],
  }

  const carolProfile = {
    name: 'Carol',
    introduction: "gm! I'm carol",
    imageURI: 'https://clonex-assets.rtfkt.com/images/422.png',
    nfts: [
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 422,
        tokenURI: 'https://clonex-assets.rtfkt.com/422',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 3090,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/3090',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a',
        tokenId: 43,
        tokenURI: 'https://token.artblocks.io/43',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: 42,
        tokenURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/metadata/42',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 121,
        tokenURI: 'https://clonex-assets.rtfkt.com/121',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 33,
        tokenURI: 'https://clonex-assets.rtfkt.com/33',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 887,
        tokenURI: 'https://clonex-assets.rtfkt.com/887',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
        tokenId: 333,
        tokenURI: 'https://api.otherside.xyz/lands/333',
        owner: carol.address,
      },
    ],
    poaps: [
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 6000,
        tokenURI: 'https://api.poap.tech/metadata/84/6000',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 6500,
        tokenURI: 'https://api.poap.tech/metadata/132/6500',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 7000,
        tokenURI: 'https://api.poap.tech/metadata/153/7000',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 7500,
        tokenURI: 'https://api.poap.tech/metadata/156/7500',
        owner: carol.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 8000,
        tokenURI: 'https://api.poap.tech/metadata/123/8000',
        owner: carol.address,
      },
    ],
    snsAccounts: [
      {
        service: 'twitter',
        userId: 'carol',
        userPageURL: 'https://twitter.com/carol',
        wallet: carol.address,
      },
    ],
    skills: [
      {
        name: 'marketing',
        description: 'I have over 10 years of experience as maketer.',
        link: 'https://www.linkedin.com/',
      },
    ],
  }

  const danielProfile = {
    name: 'Daniel',
    introduction: "gm! I'm daniel",
    imageURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/images/111',
    nfts: [
      {
        chainId: 1,
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: 111,
        tokenURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/metadata/111',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 521,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/521',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a',
        tokenId: 11,
        tokenURI: 'https://token.artblocks.io/11',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: 231,
        tokenURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/metadata/231',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: 44,
        tokenURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/metadata/44',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 465,
        tokenURI: 'https://clonex-assets.rtfkt.com/465',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
        tokenId: 882,
        tokenURI: 'https://api.otherside.xyz/lands/882',
        owner: daniel.address,
      },
    ],
    poaps: [
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 8500,
        tokenURI: 'https://api.poap.tech/metadata/196/8500',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 9000,
        tokenURI: 'https://api.poap.tech/metadata/207/9000',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 9500,
        tokenURI: 'https://api.poap.tech/metadata/209/9500',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 10000,
        tokenURI: 'https://api.poap.tech/metadata/207/10000',
        owner: daniel.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 10500,
        tokenURI: 'https://api.poap.tech/metadata/207/10500',
        owner: daniel.address,
      },
    ],
    snsAccounts: [
      {
        service: 'twitter',
        userId: 'daniel',
        userPageURL: 'https://twitter.com/daniel',
        wallet: daniel.address,
      },
    ],
    skills: [
      {
        name: 'development',
        description: 'I have over 10 years of experience as software engineer.',
        link: 'https://github.com/',
      },
    ],
  }

  const eveProfile = {
    name: 'Eve',
    introduction: "gm! I'm eve",
    imageURI: 'https://media.artblocks.io/100.png',
    nfts: [
      {
        chainId: 1,
        contractAddress: '0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a',
        tokenId: 100,
        tokenURI: 'https://token.artblocks.io/100',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 4245,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/4245',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
        tokenId: 6762,
        tokenURI: 'https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/6762',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x23581767a106ae21c074b2276D25e5C3e136a68b',
        tokenId: 92,
        tokenURI: 'https://live---metadata-5covpqijaa-uc.a.run.app/metadata/92',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
        tokenId: 119,
        tokenURI: 'https://clonex-assets.rtfkt.com/119',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258',
        tokenId: 992,
        tokenURI: 'https://api.otherside.xyz/lands/992',
        owner: eve.address,
      },
    ],
    poaps: [
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 11000,
        tokenURI: 'https://api.poap.tech/metadata/209/11000',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 11500,
        tokenURI: 'https://api.poap.tech/metadata/213/11500',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 12000,
        tokenURI: 'https://api.poap.tech/metadata/204/12000',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 12500,
        tokenURI: 'https://api.poap.tech/metadata/259/12500',
        owner: eve.address,
      },
      {
        chainId: 1,
        contractAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
        tokenId: 13000,
        tokenURI: 'https://api.poap.tech/metadata/262/13000',
        owner: eve.address,
      },
    ],
    snsAccounts: [
      {
        service: 'twitter',
        userId: 'eve',
        userPageURL: 'https://twitter.com/eve',
        wallet: eve.address,
      },
    ],
    skills: [
      {
        name: 'development',
        description: 'I have over 10 years of experience as infra engineer.',
        link: 'https://github.com/',
      },
    ],
  }

  const profile = process.env.PROFILE_ADDRESS as string
  const icecandy = process.env.ICECANDY_ADDRESS as string

  console.log('alice', alice.address, await alice.getBalance())
  console.log('bob', bob.address, await bob.getBalance())
  console.log('carol', carol.address, await carol.getBalance())
  console.log('daniel', daniel.address, await daniel.getBalance())
  console.log('eve', eve.address, await eve.getBalance())

  await Profile__factory.connect(profile, alice).createProfile(aliceProfile)
  await Profile__factory.connect(profile, bob).createProfile(bobProfile)
  await Profile__factory.connect(profile, carol).createProfile(carolProfile)
  await Profile__factory.connect(profile, daniel).createProfile(danielProfile)
  await Profile__factory.connect(profile, eve).createProfile(eveProfile)

  await IceCandy__factory.connect(icecandy, alice).mint(alice.address)
  await IceCandy__factory.connect(icecandy, bob).mint(bob.address)
  await IceCandy__factory.connect(icecandy, carol).mint(carol.address)
  await IceCandy__factory.connect(icecandy, daniel).mint(daniel.address)
  await IceCandy__factory.connect(icecandy, eve).mint(eve.address)

  await IceCandy__factory.connect(icecandy, alice).send(2, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, bob).send(1, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, carol).send(1, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, daniel).send(1, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, eve).send(1, ethers.constants.AddressZero, 0)

  await IceCandy__factory.connect(icecandy, alice).mint(alice.address)
  await IceCandy__factory.connect(icecandy, bob).mint(bob.address)
  await IceCandy__factory.connect(icecandy, carol).mint(carol.address)
  await IceCandy__factory.connect(icecandy, daniel).mint(daniel.address)
  await IceCandy__factory.connect(icecandy, eve).mint(eve.address)

  await IceCandy__factory.connect(icecandy, alice).send(3, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, bob).send(4, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, carol).send(1, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, daniel).send(1, ethers.constants.AddressZero, 0)
  await IceCandy__factory.connect(icecandy, eve).send(1, ethers.constants.AddressZero, 0)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
