import { ethers } from 'hardhat'
import { expect } from 'chai'
import { Profile, NFTCollectionModule } from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'

describe('profile test', () => {
  let owner: SignerWithAddress
  let alice: SignerWithAddress
  let bob: SignerWithAddress
  let carol: SignerWithAddress
  let profile: Profile
  let nftCollection: NFTCollectionModule

  before(async () => {
    // signers
    const signers = await ethers.getSigners()
    owner = signers[0] as SignerWithAddress
    alice = signers[1] as SignerWithAddress
    bob = signers[2] as SignerWithAddress
    carol = signers[3] as SignerWithAddress

    // deploy contracts
    const fProfile = await ethers.getContractFactory('Profile')
    profile = await fProfile.deploy(owner.address)
    const fNFTCollection = await ethers.getContractFactory('NFTCollectionModule')
    nftCollection = await fNFTCollection.deploy(profile.address)
  })

  it('setNFTCollectionModule()', async () => {
    // revert transaction
    await expect(profile.connect(alice).setNFTCollectionModule(nftCollection.address)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )

    // success transaction
    await expect(profile.connect(owner).setNFTCollectionModule(nftCollection.address)).to.be.not.reverted
  })

  it('createProfile()', async () => {
    const _profile = {
      handle: 'hogehoge',
      imageURI: 'https://image.com',
      nfts: [
        {
          chainId: 1,
          contractAddress: '0x1111111111111111111111111111111111111111',
          tokenId: 1,
          tokenURI: '',
        },
        {
          chainId: 137,
          contractAddress: '0x2222222222222222222222222222222222222222',
          tokenId: 1,
          tokenURI: 'https://polygon.com/1',
        },
      ],
    }

    // send transaction
    const _tx = await profile.connect(alice).createProfile(_profile)
    await expect(_tx)
      .to.emit(profile, 'ProfileCreated')
      .withArgs(1, alice.address, _profile.handle, _profile.imageURI, await ethers.provider.getBlockNumber())
      .to.emit(profile, 'NFTCollectionCreated')

    // get profile struct
    const profile_ = await profile.connect(alice).getProfile(1)
    expect(profile_.owner).to.equal(alice.address)
    expect(profile_.handle).to.equal(_profile.handle)
    expect(profile_.imageURI).to.equal(_profile.imageURI)
    expect(profile_.nftCollectionPubId).to.equal(1)

    // get nft struct
    const nfts_ = await profile.connect(alice).getNFTCollection(1, 1)
    expect(nfts_[0]?.chainId).to.equal(BigNumber.from(_profile.nfts[0]?.chainId))
    expect(nfts_[0]?.contractAddress).to.equal(_profile.nfts[0]?.contractAddress)
    expect(nfts_[0]?.tokenId).to.equal(BigNumber.from(_profile.nfts[0]?.tokenId))
    expect(nfts_[0]?.tokenURI).to.equal(_profile.nfts[0]?.tokenURI)
    expect(nfts_[1]?.chainId).to.equal(BigNumber.from(_profile.nfts[1]?.chainId))
    expect(nfts_[1]?.contractAddress).to.equal(_profile.nfts[1]?.contractAddress)
    expect(nfts_[1]?.tokenId).to.equal(BigNumber.from(_profile.nfts[1]?.tokenId))
    expect(nfts_[1]?.tokenURI).to.equal(_profile.nfts[1]?.tokenURI)

    // get profile token
    expect(await profile.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await profile.connect(alice).ownerOf(1)).to.be.equals(alice.address)
    expect(await profile.connect(alice).tokenURI(1)).to.be.equals('http://example.com/1')
  })

  it('createNFTCollection()', async () => {
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x3333333333333333333333333333333333333333',
        tokenId: 2,
        tokenURI: '',
      },
      {
        chainId: 137,
        contractAddress: '0x4444444444444444444444444444444444444444',
        tokenId: 2,
        tokenURI: 'https://polygon.com/2',
      },
    ]
    // send transaction
    await expect(profile.connect(alice).createNFTCollection(1, _nfts)).to.emit(profile, 'NFTCollectionCreated')

    // get nft struct
    const nfts_ = await profile.connect(alice).getNFTCollection(1, 2)
    expect(nfts_[0]?.chainId).to.equal(BigNumber.from(_nfts[0]?.chainId))
    expect(nfts_[0]?.contractAddress).to.equal(_nfts[0]?.contractAddress)
    expect(nfts_[0]?.tokenId).to.equal(BigNumber.from(_nfts[0]?.tokenId))
    expect(nfts_[0]?.tokenURI).to.equal(_nfts[0]?.tokenURI)
    expect(nfts_[1]?.chainId).to.equal(BigNumber.from(_nfts[1]?.chainId))
    expect(nfts_[1]?.contractAddress).to.equal(_nfts[1]?.contractAddress)
    expect(nfts_[1]?.tokenId).to.equal(BigNumber.from(_nfts[1]?.tokenId))
    expect(nfts_[1]?.tokenURI).to.equal(_nfts[1]?.tokenURI)

    // get profile struct
    const profile_ = await profile.connect(alice).getProfile(1)
    expect(profile_.nftCollectionPubId).to.equal(2)
  })

  it('createNFTCollection() approve pattern', async () => {
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x3333333333333333333333333333333333333333',
        tokenId: 2,
        tokenURI: '',
      },
      {
        chainId: 137,
        contractAddress: '0x4444444444444444444444444444444444444444',
        tokenId: 2,
        tokenURI: 'https://polygon.com/2',
      },
    ]

    // before approval transaction is reverted
    await expect(profile.connect(bob).createNFTCollection(1, _nfts)).to.be.revertedWith(
      'Profile: caller is not owner or approved'
    )

    // approve bob
    await expect(profile.connect(alice).approve(bob.address, 1))
      .to.emit(profile, 'Approval')
      .withArgs(alice.address, bob.address, 1)

    // after approval transaction is success
    await expect(profile.connect(bob).createNFTCollection(1, _nfts)).to.emit(profile, 'NFTCollectionCreated')
  })

  it('createNFTCollection() setApprovalForAll pattern', async () => {
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x5555555555555555555555555555555555555555',
        tokenId: 3,
        tokenURI: '',
      },
      {
        chainId: 137,
        contractAddress: '0x6666666666666666666666666666666666666666',
        tokenId: 3,
        tokenURI: 'https://polygon.com/3',
      },
    ]

    // before approval transaction is reverted
    await expect(profile.connect(carol).createNFTCollection(1, _nfts)).to.be.revertedWith(
      'Profile: caller is not owner or approved'
    )

    // set carol to approval for all
    await expect(profile.connect(alice).setApprovalForAll(carol.address, true))
      .to.emit(profile, 'ApprovalForAll')
      .withArgs(alice.address, carol.address, true)

    // after approval transaction is success
    await expect(profile.connect(carol).createNFTCollection(1, _nfts)).to.emit(profile, 'NFTCollectionCreated')
  })
})
