import { ethers } from 'hardhat'
import { expect } from 'chai'
import { BigNumber } from 'ethers'
import {
  owner,
  alice,
  bob,
  carol,
  daniel,
  eve,
  icecandy,
  profile,
  nft,
  poap,
  sns,
  score,
  skill,
  mirror,
  flavor,
} from './helpers/__setup2.test'
import { profileData, nftData, nftData2, nftData3, poapData, mirrorData, snsData, skillData } from './helpers/data'

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
      .to.emit(nft, 'NFTCollectionCreated')
      .withArgs(1, nft.address, await ethers.provider.getBlockNumber())
      .to.emit(poap, 'NFTCollectionCreated')
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

    // check score
    const score_ = await score.connect(alice).getScore(1)
    expect(score_[0]?.point).to.be.equals(BigNumber.from(0))
    expect(score_[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score_[2]?.point).to.be.equals(BigNumber.from(20))
  })

  it('createNFTCollection()', async () => {
    // send transaction
    const _nfts = nftData(alice)
    const _tx = await profile.connect(alice).createNFTCollection(1, _nfts)
    await expect(_tx)
      .to.emit(nft, 'NFTCollectionCreated')
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
    expect(nfts_[2]?.chainId).to.equal(BigNumber.from(_nfts[2]?.chainId))
    expect(nfts_[2]?.contractAddress).to.equal(_nfts[2]?.contractAddress)
    expect(nfts_[2]?.tokenId).to.equal(BigNumber.from(_nfts[2]?.tokenId))
    expect(nfts_[2]?.tokenURI).to.equal(_nfts[2]?.tokenURI)

    // check score
    const score_ = await score.connect(alice).getScore(1)
    expect(score_[0]?.point).to.be.equals(BigNumber.from(0))
    expect(score_[1]?.point).to.be.equals(BigNumber.from(30))
    expect(score_[2]?.point).to.be.equals(BigNumber.from(20))
  })

  it('createPOAPCollection()', async () => {
    // send transaction
    const _poaps = poapData(alice)
    const _tx = await profile.connect(alice).createPOAPCollection(1, _poaps)
    await expect(_tx)
      .to.emit(poap, 'NFTCollectionCreated')
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
    expect(poaps_[2]?.chainId).to.equal(BigNumber.from(_poaps[2]?.chainId))
    expect(poaps_[2]?.contractAddress).to.equal(_poaps[2]?.contractAddress)
    expect(poaps_[2]?.tokenId).to.equal(BigNumber.from(_poaps[2]?.tokenId))
    expect(poaps_[2]?.tokenURI).to.equal(_poaps[2]?.tokenURI)

    // check score
    const score_ = await score.connect(alice).getScore(1)
    expect(score_[0]?.point).to.be.equals(BigNumber.from(0))
    expect(score_[1]?.point).to.be.equals(BigNumber.from(30))
    expect(score_[2]?.point).to.be.equals(BigNumber.from(30))
  })

  it('addMirror()', async () => {
    // send transaction
    const _mirror = mirrorData()
    const _tx = await profile.connect(alice).addMirror(1, _mirror)
    await expect(_tx)
      .to.emit(mirror, 'MirrorAdded')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // get mirror
    const mirror_ = await profile.connect(alice).getMirror(1)
    expect(mirror_[0]?.hoge).to.equal(_mirror.hoge)
  })

  it('addSkill()', async () => {
    // send transaction
    const _skill = skillData()
    const _tx = await profile.connect(alice).addSkill(1, _skill)
    await expect(_tx)
      .to.emit(skill, 'SkillAdded')
      .withArgs(1, 2, await ethers.provider.getBlockNumber())

    // get skill
    const skill_ = await profile.connect(alice).getSkill(1)
    expect(skill_[0]?.name).to.equal(_skill.name)
    expect(skill_[0]?.description).to.equal(_skill.description)
    expect(skill_[0]?.link).to.equal(_skill.link)
  })

  it('activateFlavor()', async () => {
    // create carol's profile
    await profile.connect(eve).createProfile(profileData(eve))

    // mint icecandy to alice
    await icecandy.connect(owner).mint(alice.address)

    // alice send icecandy to carol
    await icecandy.connect(alice).send(2, ethers.constants.AddressZero, 0)

    // check alice's flavor
    const _flavor = await profile.connect(alice).getFlavor(1)
    expect(_flavor.length).to.be.equals(1)
    expect(_flavor[0]?.active).to.be.equals(false)

    // activate flavor
    const _tx = await profile.connect(alice).activateFlavor(1, 1)
    await expect(_tx)
      .to.emit(flavor, 'FlavorActivated')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // check flavor
    const flavor_ = await profile.connect(alice).getFlavor(1)
    expect(flavor_[0]?.active).to.be.equals(true)
  })

  it('deactivateFlavor()', async () => {
    // deactivate flavor
    const _tx = await profile.connect(alice).deactivateFlavor(1, 1)
    await expect(_tx)
      .to.emit(flavor, 'FlavorDeactivated')
      .withArgs(1, 1, await ethers.provider.getBlockNumber())

    // get color
    const flavor_ = await profile.connect(alice).getFlavor(1)
    expect(flavor_[0]?.active).to.equal(false)
  })

  it('createSNS()', async () => {
    // send transaction
    const _sns = snsData(alice)
    await expect(profile.connect(alice).createSNSAccount(1, _sns)).to.emit(sns, 'SNSAccountCreated')

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
    await expect(profile.connect(bob).createNFTCollection(1, _nfts)).to.emit(nft, 'NFTCollectionCreated')
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
    await expect(profile.connect(carol).createNFTCollection(1, _nfts)).to.emit(nft, 'NFTCollectionCreated')
    // [after approval]addWallet
    await expect(profile.connect(carol).addWallet(1, daniel.address)).to.emit(profile, 'WalletAdded')
  })
})
