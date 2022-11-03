import { ethers } from 'hardhat'
import { expect } from 'chai'
import { BigNumber } from 'ethers'
import { owner, alice, bob, carol, daniel, icecandy, profile, nft, poap } from './helpers/__setup2.test'
import { profileData, nftData, nftData2, nftData3, poapData, mirrorData, snsData } from './helpers/data'

describe('profile test', () => {
  it('createProfile()', async () => {
    // send transaction
    const _profile = profileData(alice)
    const _tx = await profile.connect(alice).createProfile(_profile)
    await expect(_tx)
      .to.emit(profile, 'ProfileCreated')
      .withArgs(1, alice.address, await ethers.provider.getBlockNumber())
      .to.emit(icecandy, 'Transfer')
      .withArgs(owner.address, alice.address, 1)
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, nft.address, await ethers.provider.getBlockNumber())
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, poap.address, await ethers.provider.getBlockNumber())

    // get profile
    const profileId_ = await profile.getProfileId(alice.address)
    expect(profileId_).to.equal(1)

    // get profileId
    const profile_ = await profile.connect(alice).getProfile(1)
    expect(profile_.wallets[0]).to.equal(alice.address)
    expect(profile_.name).to.equal(_profile.name)
    expect(profile_.introduction).to.equal(_profile.introduction)
    expect(profile_.imageURI).to.equal(_profile.imageURI)

    // get nfts
    const nfts_ = await profile.connect(alice).getNFTCollection(1)
    expect(nfts_[0]?.chainId).to.equal(BigNumber.from(_profile.nfts[0]?.chainId))
    expect(nfts_[0]?.contractAddress).to.equal(_profile.nfts[0]?.contractAddress)
    expect(nfts_[0]?.tokenId).to.equal(BigNumber.from(_profile.nfts[0]?.tokenId))
    expect(nfts_[0]?.tokenURI).to.equal(_profile.nfts[0]?.tokenURI)
    expect(nfts_[1]?.chainId).to.equal(BigNumber.from(_profile.nfts[1]?.chainId))
    expect(nfts_[1]?.contractAddress).to.equal(_profile.nfts[1]?.contractAddress)
    expect(nfts_[1]?.tokenId).to.equal(BigNumber.from(_profile.nfts[1]?.tokenId))
    expect(nfts_[1]?.tokenURI).to.equal(_profile.nfts[1]?.tokenURI)

    // get poaps
    const poaps_ = await profile.connect(alice).getPOAPCollection(1)
    expect(poaps_[0]?.chainId).to.equal(BigNumber.from(_profile.poaps[0]?.chainId))
    expect(poaps_[0]?.contractAddress).to.equal(_profile.poaps[0]?.contractAddress)
    expect(poaps_[0]?.tokenId).to.equal(BigNumber.from(_profile.poaps[0]?.tokenId))
    expect(poaps_[0]?.tokenURI).to.equal(_profile.poaps[0]?.tokenURI)
    expect(poaps_[1]?.chainId).to.equal(BigNumber.from(_profile.poaps[1]?.chainId))
    expect(poaps_[1]?.contractAddress).to.equal(_profile.poaps[1]?.contractAddress)
    expect(poaps_[1]?.tokenId).to.equal(BigNumber.from(_profile.poaps[1]?.tokenId))
    expect(poaps_[1]?.tokenURI).to.equal(_profile.poaps[1]?.tokenURI)

    // get snsAccount
    const snsAccounts_ = await profile.connect(alice).getSNSAccounts(1)
    expect(snsAccounts_[0]?.service).to.equal('twitter')
    expect(snsAccounts_[0]?.userId).to.equal('hello')
    expect(snsAccounts_[0]?.userPageURL).to.equal('https://hoge.com')

    // get profile token
    expect(await profile.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await profile.connect(alice).ownerOf(1)).to.be.equals(alice.address)
    expect(await profile.connect(alice).tokenURI(1)).to.be.equals('http://example.com/1')
  })

  it('createNFTCollection()', async () => {
    // send transaction
    const _nfts = nftData(alice)
    const _tx = await profile.connect(alice).createNFTCollection(1, _nfts)
    await expect(_tx)
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, nft.address, await ethers.provider.getBlockNumber())

    // get nfts
    const nfts_ = await profile.connect(alice).getNFTCollection(1)
    expect(nfts_[0]?.chainId).to.equal(BigNumber.from(_nfts[0]?.chainId))
    expect(nfts_[0]?.contractAddress).to.equal(_nfts[0]?.contractAddress)
    expect(nfts_[0]?.tokenId).to.equal(BigNumber.from(_nfts[0]?.tokenId))
    expect(nfts_[0]?.tokenURI).to.equal(_nfts[0]?.tokenURI)
    expect(nfts_[1]?.chainId).to.equal(BigNumber.from(_nfts[1]?.chainId))
    expect(nfts_[1]?.contractAddress).to.equal(_nfts[1]?.contractAddress)
    expect(nfts_[1]?.tokenId).to.equal(BigNumber.from(_nfts[1]?.tokenId))
    expect(nfts_[1]?.tokenURI).to.equal(_nfts[1]?.tokenURI)
  })

  it('createPOAPCollection()', async () => {
    // send transaction
    const _poaps = poapData(alice)
    const _tx = await profile.connect(alice).createPOAPCollection(1, _poaps)
    await expect(_tx)
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, poap.address, await ethers.provider.getBlockNumber())

    // get poaps
    const poaps_ = await profile.connect(alice).getPOAPCollection(1)
    expect(poaps_[0]?.chainId).to.equal(BigNumber.from(_poaps[0]?.chainId))
    expect(poaps_[0]?.contractAddress).to.equal(_poaps[0]?.contractAddress)
    expect(poaps_[0]?.tokenId).to.equal(BigNumber.from(_poaps[0]?.tokenId))
    expect(poaps_[0]?.tokenURI).to.equal(_poaps[0]?.tokenURI)
    expect(poaps_[1]?.chainId).to.equal(BigNumber.from(_poaps[1]?.chainId))
    expect(poaps_[1]?.contractAddress).to.equal(_poaps[1]?.contractAddress)
    expect(poaps_[1]?.tokenId).to.equal(BigNumber.from(_poaps[1]?.tokenId))
    expect(poaps_[1]?.tokenURI).to.equal(_poaps[1]?.tokenURI)
  })

  it('addMirror()', async () => {
    // send transaction
    const _mirror = mirrorData()
    const _tx = await profile.connect(alice).addMirror(1, _mirror)
    await expect(_tx)
      .to.emit(profile, 'MirrorAdded')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // get mirror
    const mirror_ = await profile.connect(alice).getMirror(1)
    expect(mirror_[0]?.hoge).to.equal(_mirror.hoge)
  })

  it('addColor()', async () => {
    // send transaction
    const _tx = await profile.connect(alice).addColor(1, 'white')
    await expect(_tx)
      .to.emit(profile, 'ColorAdded')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // get color
    const mirror_ = await profile.connect(alice).getColor(1)
    expect(mirror_[0]?.color).to.equal('white')
    expect(mirror_[0]?.active).to.equal(false)
  })

  it('activateColor()', async () => {
    // send transaction
    const _tx = await profile.connect(alice).activateColor(1, 1)
    await expect(_tx)
      .to.emit(profile, 'ColorActivated')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // get color
    const mirror_ = await profile.connect(alice).getColor(1)
    expect(mirror_[0]?.active).to.equal(true)
  })

  it('deactivateColor()', async () => {
    // send transaction
    const _tx = await profile.connect(alice).deactivateColor(1, 1)
    await expect(_tx)
      .to.emit(profile, 'ColorDeactivated')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // get color
    const mirror_ = await profile.connect(alice).getColor(1)
    expect(mirror_[0]?.active).to.equal(false)
  })

  it('createSNS()', async () => {
    // send transaction
    const _sns = snsData(alice)
    await expect(profile.connect(alice).createSNSAccount(1, _sns)).to.emit(profile, 'SNSAccountCreated')

    const sns_ = await profile.connect(alice).getSNSAccounts(1)
    expect(sns_[0]?.service).to.equal(_sns[0]?.service)
    expect(sns_[0]?.userId).to.equal(_sns[0]?.userId)
    expect(sns_[0]?.userPageURL).to.equal(_sns[0]?.userPageURL)
    expect(sns_[1]?.service).to.equal(_sns[1]?.service)
    expect(sns_[1]?.userId).to.equal(_sns[1]?.userId)
    expect(sns_[1]?.userPageURL).to.equal(_sns[1]?.userPageURL)
  })

  it('addWallet()', async () => {
    // send transaction
    await expect(profile.connect(alice).addWallet(1, bob.address)).to.emit(profile, 'WalletAdded')

    // get profileId
    const profileId_ = await profile.getProfileId(alice.address)
    expect(profileId_).to.equal(1)

    // get profile
    const profile_ = await profile.connect(alice).getProfile(profileId_)
    expect(profile_.wallets[0]).to.equal(alice.address)
    expect(profile_.wallets[1]).to.equal(bob.address)
  })

  it('approve', async () => {
    const _nfts = nftData2(alice)

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
    const _nfts = nftData3(alice)

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
