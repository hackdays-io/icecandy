import { ethers } from 'hardhat'
import { expect } from 'chai'
import { Profile, NFTCollectionModule } from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'

describe('profile test', () => {
  let owner: SignerWithAddress
  let user: SignerWithAddress
  let profile: Profile
  let nftCollection: NFTCollectionModule

  before(async () => {
    // signers
    const signers = await ethers.getSigners()
    owner = signers[0] as SignerWithAddress
    user = signers[1] as SignerWithAddress

    // deploy contracts
    const fProfile = await ethers.getContractFactory('Profile')
    profile = await fProfile.deploy(owner.address)
    const fNFTCollection = await ethers.getContractFactory('NFTCollectionModule')
    nftCollection = await fNFTCollection.deploy(profile.address)
  })

  it('setNFTCollectionModule()', async () => {
    // revert transaction
    await expect(profile.connect(user).setNFTCollectionModule(nftCollection.address)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )

    // success transaction
    await expect(profile.connect(owner).setNFTCollectionModule(nftCollection.address)).to.be.not.reverted
  })

  it('createProfile()', async () => {
    const _profile = {
      handle: 'hogehoge',
      imageURI: 'https://image.com',
    }

    // send transaction
    const _tx = await profile.connect(user).createProfile(_profile)
    await expect(_tx)
      .to.emit(profile, 'ProfileCreated')
      .withArgs(1, user.address, _profile.handle, _profile.imageURI, await ethers.provider.getBlockNumber())

    // get profile struct
    const profile_ = await profile.connect(user).getProfile(1)
    expect(profile_.owner).to.equal(user.address)
    expect(profile_.handle).to.equal(_profile.handle)
    expect(profile_.imageURI).to.equal(_profile.imageURI)
    expect(profile_.nftCollectionPubId).to.equal(0)

    // get profile token
    expect(await profile.connect(user).balanceOf(user.address)).to.be.equals(1)
    expect(await profile.connect(user).ownerOf(1)).to.be.equals(user.address)
    expect(await profile.connect(user).tokenURI(1)).to.be.equals('http://example.com/1')
  })

  it('createNFTCollection', async () => {
    const _nfts = [
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
    ]
    // send transaction
    const _tx = await profile.connect(user).createNFTCollection(1, 1, _nfts)
    await expect(_tx).to.emit(profile, 'NFTCollectionCreated')

    // get nft struct
    const nfts_ = await profile.connect(user).getNFTCollection(1, 1)
    expect(nfts_[0]?.chainId).to.equal(BigNumber.from(_nfts[0]?.chainId))
    expect(nfts_[0]?.contractAddress).to.equal(_nfts[0]?.contractAddress)
    expect(nfts_[0]?.tokenId).to.equal(BigNumber.from(_nfts[0]?.tokenId))
    expect(nfts_[0]?.tokenURI).to.equal(_nfts[0]?.tokenURI)
    expect(nfts_[1]?.chainId).to.equal(BigNumber.from(_nfts[1]?.chainId))
    expect(nfts_[1]?.contractAddress).to.equal(_nfts[1]?.contractAddress)
    expect(nfts_[1]?.tokenId).to.equal(BigNumber.from(_nfts[1]?.tokenId))
    expect(nfts_[1]?.tokenURI).to.equal(_nfts[1]?.tokenURI)

    // get profile struct
    const profile_ = await profile.connect(user).getProfile(1)
    expect(profile_.nftCollectionPubId).to.equal(1)
  })
})
