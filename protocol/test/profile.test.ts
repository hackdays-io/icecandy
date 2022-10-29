import { ethers } from 'hardhat'
import { expect } from 'chai'
import { Profile, NFTCollectionModule, ISNSAccountModule, SNSAccountModule } from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'
import { IProfile } from '../typechain-types/contracts/core/Profile'

describe('profile test', () => {
  let owner: SignerWithAddress
  let alice: SignerWithAddress
  let bob: SignerWithAddress
  let carol: SignerWithAddress
  let daniel: SignerWithAddress
  let profile: Profile
  let nftCollection: NFTCollectionModule
  let snsAccount: SNSAccountModule

  before(async () => {
    // signers
    const signers = await ethers.getSigners()
    owner = signers[0] as SignerWithAddress
    alice = signers[1] as SignerWithAddress
    bob = signers[2] as SignerWithAddress
    carol = signers[3] as SignerWithAddress
    daniel = signers[4] as SignerWithAddress

    // deploy contracts
    const fProfile = await ethers.getContractFactory('Profile')
    profile = await fProfile.deploy(owner.address)
    const fNFTCollection = await ethers.getContractFactory('NFTCollectionModule')
    nftCollection = await fNFTCollection.deploy(profile.address)
    const fSNSAccount = await ethers.getContractFactory('SNSAccountModule')
    snsAccount = await fSNSAccount.deploy(profile.address)
  })

  it('setNFTCollectionModule()', async () => {
    // revert transaction
    await expect(profile.connect(alice).setNFTCollectionModule(nftCollection.address)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )

    // success transaction
    await expect(profile.connect(owner).setNFTCollectionModule(nftCollection.address)).to.be.not.reverted
  })

  it('setSNSAccountModule()', async () => {
    await expect(profile.connect(alice).setSNSAccountModule(snsAccount.address)).to.be.revertedWith(
      'Ownable: caller is not the owner'
    )

    // success transaction
    await expect(profile.connect(owner).setSNSAccountModule(snsAccount.address)).to.be.not.reverted
  })

  it('createProfile()', async () => {
    const _profile: IProfile.CreateProfileStructDataStruct = {
      handle: 'hogehoge',
      imageURI: 'https://image.com',
      nfts: [
        {
          chainId: 1,
          contractAddress: '0x1111111111111111111111111111111111111111',
          tokenId: 1,
          tokenURI: '',
          wallet: alice.address,
        },
        {
          chainId: 137,
          contractAddress: '0x2222222222222222222222222222222222222222',
          tokenId: 1,
          tokenURI: 'https://polygon.com/1',
          wallet: alice.address,
        },
      ],
      snsAccounts: [
        {
          service: 'twitter',
          userId: 'hello',
          userPageURL: 'https://hoge.com',
          wallet: alice.address,
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
    expect(profile_.wallets[0]).to.equal(alice.address)
    expect(profile_.handle).to.equal(_profile.handle)
    expect(profile_.imageURI).to.equal(_profile.imageURI)
    expect(profile_.nftCollectionPubId).to.equal(1)
    expect(profile_.snsAccountsPubId).to.equal(1)

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

    // get snsAccount struct
    const snsAccounts_ = await profile.connect(alice).getSNSAccounts(1, 1)
    expect(snsAccounts_[0]?.service).to.equal('twitter')
    expect(snsAccounts_[0]?.userId).to.equal('hello')
    expect(snsAccounts_[0]?.userPageURL).to.equal('https://hoge.com')

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
        wallet: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x4444444444444444444444444444444444444444',
        tokenId: 2,
        tokenURI: 'https://polygon.com/2',
        wallet: alice.address,
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

  it('createSNS()', async () => {
    const _github: ISNSAccountModule.SNSAccountStructStruct = {
      service: 'github',
      userId: 'hello_world',
      userPageURL: 'https://github.com/hello_world',
      wallet: alice.address,
    }
    await expect(profile.connect(alice).createSNSAccount(1, _github)).to.emit(profile, 'SNSAccountCreated')

    const aliceAccounts = await profile.connect(alice).getSNSAccounts(1, 1)
    expect(aliceAccounts[1]?.service).to.equal('github')
    expect(aliceAccounts[1]?.userId).to.equal('hello_world')
    expect(aliceAccounts[1]?.userPageURL).to.equal('https://github.com/hello_world')

    const retrievedProfile = await profile.connect(alice).getProfile(1)
    expect(retrievedProfile.snsAccountsPubId).to.equal(1)
  })

  it('addWallet()', async () => {
    // send transaction
    await expect(profile.connect(alice).addWallet(1, bob.address)).to.emit(profile, 'WalletAdded')

    // get profile struct
    const profile_ = await profile.connect(alice).getProfile(1)
    expect(profile_.wallets[0]).to.equal(alice.address)
    expect(profile_.wallets[1]).to.equal(bob.address)
  })

  it('approve', async () => {
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x3333333333333333333333333333333333333333',
        tokenId: 2,
        tokenURI: '',
        wallet: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x4444444444444444444444444444444444444444',
        tokenId: 2,
        tokenURI: 'https://polygon.com/2',
        wallet: alice.address,
      },
    ]

    // [before approval]createNFTCollection
    await expect(profile.connect(bob).createNFTCollection(1, _nfts)).to.be.revertedWith(
      'Profile: caller is not owner or approved'
    )
    // [before approval]addWallet
    await expect(profile.connect(bob).addWallet(1, carol.address)).to.be.revertedWith(
      'Profile: caller is not owner or approved'
    )

    // approve bob
    await expect(profile.connect(alice).approve(bob.address, 1))
      .to.emit(profile, 'Approval')
      .withArgs(alice.address, bob.address, 1)

    // [after approval]createNFTCollection
    await expect(profile.connect(bob).createNFTCollection(1, _nfts)).to.emit(profile, 'NFTCollectionCreated')
    // [after approval]addWallet
    await expect(profile.connect(bob).addWallet(1, carol.address)).to.emit(profile, 'WalletAdded')
  })

  it('setApprovalForAll', async () => {
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x5555555555555555555555555555555555555555',
        tokenId: 3,
        tokenURI: '',
        wallet: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x6666666666666666666666666666666666666666',
        tokenId: 3,
        tokenURI: 'https://polygon.com/3',
        wallet: alice.address,
      },
    ]

    // [before approval]createNFTCollection
    await expect(profile.connect(carol).createNFTCollection(1, _nfts)).to.be.revertedWith(
      'Profile: caller is not owner or approved'
    )
    // [before approval]addWallet
    await expect(profile.connect(carol).addWallet(1, daniel.address)).to.be.revertedWith(
      'Profile: caller is not owner or approved'
    )

    // set carol to approval for all
    await expect(profile.connect(alice).setApprovalForAll(carol.address, true))
      .to.emit(profile, 'ApprovalForAll')
      .withArgs(alice.address, carol.address, true)

    // [after approval]createNFTCollection
    await expect(profile.connect(carol).createNFTCollection(1, _nfts)).to.emit(profile, 'NFTCollectionCreated')
    // [after approval]addWallet
    await expect(profile.connect(carol).addWallet(1, daniel.address)).to.emit(profile, 'WalletAdded')
  })
})
