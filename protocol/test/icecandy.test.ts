import { ethers } from 'hardhat'
import { expect } from 'chai'
import { owner, alice, bob, carol, icecandy, profile, nft, score, flavor } from './helpers/__setup1.test'
import { profileData, tokenURI } from './helpers/data'
import { BigNumber } from 'ethers'

describe('icecandy test', () => {
  before(async () => {
    // create alice and bob profile
    await profile.connect(alice).createProfile(profileData(alice))
    await profile.connect(bob).createProfile(profileData(bob))
    await profile.connect(carol).createProfile(profileData(carol))
  })

  it('owner airdrops icecandy to alice, bob and carol', async () => {
    // mint icecandy to alice
    const _tx1 = await icecandy.connect(owner).mint(alice.address)
    await expect(_tx1)
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 1)
      .to.emit(icecandy, 'Mint')
      .withArgs(1, alice.address, 0, await ethers.provider.getBlockNumber())

    // mint icecandy to bob
    const _tx2 = await icecandy.connect(owner).mint(bob.address)
    await expect(_tx2)
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, bob.address, 2)
      .to.emit(icecandy, 'Mint')
      .withArgs(2, bob.address, 0, await ethers.provider.getBlockNumber())

    // mint icecandy to carol
    const _tx3 = await icecandy.connect(owner).mint(carol.address)
    await expect(_tx3)
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, carol.address, 3)
      .to.emit(icecandy, 'Mint')
      .withArgs(3, carol.address, 0, await ethers.provider.getBlockNumber())

    // check icecandy 1
    const icecandy1_ = await icecandy.connect(alice).getIceCandy(1)
    expect(icecandy1_.iceCandyType).to.equal(0)
    expect(icecandy1_.sentProfileId).to.equal(0)
    expect(icecandy1_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy1_.sentModuleId).to.equal(0)

    expect(await icecandy.connect(alice).ownerOf(1)).to.be.equals(alice.address)
    expect(await icecandy.connect(alice).tokenURI(1)).to.be.equals(tokenURI.notRevealed)

    // check icecandy 2
    const icecandy2_ = await icecandy.connect(bob).getIceCandy(2)
    expect(icecandy2_.iceCandyType).to.equal(0)
    expect(icecandy2_.sentProfileId).to.equal(0)
    expect(icecandy2_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy2_.sentModuleId).to.equal(0)

    expect(await icecandy.connect(bob).ownerOf(2)).to.be.equals(bob.address)
    expect(await icecandy.connect(bob).tokenURI(2)).to.be.equals(tokenURI.notRevealed)

    // check icecandy 3
    const icecandy3_ = await icecandy.connect(carol).getIceCandy(3)
    expect(icecandy3_.iceCandyType).to.equal(0)
    expect(icecandy3_.sentProfileId).to.equal(0)
    expect(icecandy3_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy3_.sentModuleId).to.equal(0)

    expect(await icecandy.connect(carol).ownerOf(3)).to.be.equals(carol.address)
    expect(await icecandy.connect(carol).tokenURI(3)).to.be.equals(tokenURI.notRevealed)

    // check balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(0)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of bob
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfRevealed(bob.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOfNotRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfLucky(bob.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOfUnlucky(bob.address)).to.be.equals(0)

    expect(await icecandy.connect(bob).numberOfSentProfiles(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedProfiles(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfSentIceCandies(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedIceCandies(2)).to.be.equals(0)

    expect(await icecandy.connect(bob).getSentProfileIds(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedProfileIds(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getSentIceCandies(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedIceCandies(2)).to.be.deep.equals([])

    // check balance of carol
    expect(await icecandy.connect(carol).balanceOf(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfNotRevealed(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfLucky(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfUnlucky(carol.address)).to.be.equals(0)

    expect(await icecandy.connect(carol).numberOfSentProfiles(3)).to.be.equals(0)
    expect(await icecandy.connect(carol).numberOfReceivedProfiles(3)).to.be.equals(0)
    expect(await icecandy.connect(carol).numberOfSentIceCandies(3)).to.be.equals(0)
    expect(await icecandy.connect(carol).numberOfReceivedIceCandies(3)).to.be.equals(0)

    expect(await icecandy.connect(carol).getSentProfileIds(3)).to.be.deep.equals([])
    expect(await icecandy.connect(carol).getReceivedProfileIds(3)).to.be.deep.equals([])
    expect(await icecandy.connect(carol).getSentIceCandies(3)).to.be.deep.equals([])
    expect(await icecandy.connect(carol).getReceivedIceCandies(3)).to.be.deep.equals([])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(0))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of bob
    const score2 = await score.connect(alice).getScore(2)
    expect(score2[0]?.point).to.be.equals(BigNumber.from(0))
    expect(score2[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score2[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of carol
    const score3 = await score.connect(alice).getScore(3)
    expect(score3[0]?.point).to.be.equals(BigNumber.from(0))
    expect(score3[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score3[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(0)

    // check flavor of bob
    const flavor2 = await flavor.connect(bob).getFlavor(2)
    expect(flavor2.length).to.be.equals(0)

    // check flavor of carol
    const flavor3 = await flavor.connect(carol).getFlavor(3)
    expect(flavor3.length).to.be.equals(0)
  })

  it('alice send icecandy to bob, and get lucky icecandy', async () => {
    // alice send icecandy to bob
    const _tx = await icecandy.connect(alice).send(2, nft.address, 1)
    await expect(_tx)
      .to.emit(icecandy, 'Transfer')
      .withArgs(alice.address, bob.address, 1)
      .to.emit(icecandy, 'Sent')
      .withArgs(1, 1, 2, nft.address, 1, await ethers.provider.getBlockNumber())
      .to.emit(icecandy, 'Mint')
      .withArgs(4, alice.address, 2, await ethers.provider.getBlockNumber())

    // check icecandy 1
    const icecandy1_ = await icecandy.connect(alice).getIceCandy(1)
    expect(icecandy1_.iceCandyType).to.equal(1)
    expect(icecandy1_.sentProfileId).to.equal(2)
    expect(icecandy1_.sentModule).to.equal(nft.address)
    expect(icecandy1_.sentModuleId).to.equal(1)
    expect(await icecandy.connect(bob).ownerOf(1)).to.be.equals(bob.address)
    expect(await icecandy.connect(bob).tokenURI(1)).to.be.equals(tokenURI.revealed.purple)

    // check icecandy 4
    const icecandy4_ = await icecandy.connect(alice).getIceCandy(4)
    expect(icecandy4_.iceCandyType).to.equal(2)
    expect(icecandy4_.sentProfileId).to.equal(0)
    expect(icecandy4_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy4_.sentModuleId).to.equal(0)
    expect(await icecandy.connect(alice).ownerOf(4)).to.be.equals(alice.address)
    expect(await icecandy.connect(alice).tokenURI(4)).to.be.equals(tokenURI.lucky)

    // check balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(0)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of bob
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(2)
    expect(await icecandy.connect(bob).balanceOfRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfNotRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfLucky(bob.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOfUnlucky(bob.address)).to.be.equals(0)

    expect(await icecandy.connect(bob).numberOfSentProfiles(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedProfiles(2)).to.be.equals(1)
    expect(await icecandy.connect(bob).numberOfSentIceCandies(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedIceCandies(2)).to.be.equals(1)

    expect(await icecandy.connect(bob).getSentProfileIds(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedProfileIds(2)).to.be.deep.equals([BigNumber.from(1)])
    expect(await icecandy.connect(bob).getSentIceCandies(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedIceCandies(2)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(1), nft.address, BigNumber.from(1)],
    ])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of bob
    const score2 = await score.connect(alice).getScore(2)
    expect(score2[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score2[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score2[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)

    // check flavor of bob
    const flavor2 = await flavor.connect(bob).getFlavor(2)
    expect(flavor2.length).to.be.equals(1)
    expect(flavor2[0]?.flavorType).to.be.equals(0)
  })

  it('carol send icecandy to bob, and get unlucky icecandy', async () => {
    // alice send icecandy to bob
    const _tx = await icecandy.connect(carol).send(2, nft.address, 1)
    await expect(_tx)
      .to.emit(icecandy, 'Transfer')
      .withArgs(carol.address, bob.address, 3)
      .to.emit(icecandy, 'Sent')
      .withArgs(3, 3, 2, nft.address, 1, await ethers.provider.getBlockNumber())
      .to.emit(icecandy, 'Mint')
      .withArgs(5, carol.address, 3, await ethers.provider.getBlockNumber())

    // check icecandy 3
    const icecandy3_ = await icecandy.connect(bob).getIceCandy(3)
    expect(icecandy3_.iceCandyType).to.equal(1)
    expect(icecandy3_.sentProfileId).to.equal(2)
    expect(icecandy3_.sentModule).to.equal(nft.address)
    expect(icecandy3_.sentModuleId).to.equal(1)
    expect(await icecandy.connect(bob).ownerOf(3)).to.be.equals(bob.address)
    expect(await icecandy.connect(bob).tokenURI(3)).to.be.equals(tokenURI.revealed.pinapple)

    // check icecandy 5
    const icecandy5_ = await icecandy.connect(carol).getIceCandy(5)
    expect(icecandy5_.iceCandyType).to.equal(3)
    expect(icecandy5_.sentProfileId).to.equal(0)
    expect(icecandy5_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy5_.sentModuleId).to.equal(0)
    expect(await icecandy.connect(carol).ownerOf(5)).to.be.equals(carol.address)
    expect(await icecandy.connect(carol).tokenURI(5)).to.be.equals(tokenURI.unlucky)

    // check balance of bob
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(3)
    expect(await icecandy.connect(bob).balanceOfRevealed(bob.address)).to.be.equals(2)
    expect(await icecandy.connect(bob).balanceOfNotRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfLucky(bob.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOfUnlucky(bob.address)).to.be.equals(0)

    expect(await icecandy.connect(bob).numberOfSentProfiles(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedProfiles(2)).to.be.equals(2)
    expect(await icecandy.connect(bob).numberOfSentIceCandies(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedIceCandies(2)).to.be.equals(2)

    expect(await icecandy.connect(bob).getSentProfileIds(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedProfileIds(2)).to.be.deep.equals([
      BigNumber.from(1),
      BigNumber.from(3),
    ])
    expect(await icecandy.connect(bob).getSentIceCandies(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedIceCandies(2)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(1), nft.address, BigNumber.from(1)],
      [BigNumber.from(3), BigNumber.from(3), nft.address, BigNumber.from(1)],
    ])

    // check balance of carol
    expect(await icecandy.connect(carol).balanceOf(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfNotRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfLucky(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfUnlucky(carol.address)).to.be.equals(1)

    expect(await icecandy.connect(carol).numberOfSentProfiles(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedProfiles(3)).to.be.equals(0)
    expect(await icecandy.connect(carol).numberOfSentIceCandies(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedIceCandies(3)).to.be.equals(0)

    expect(await icecandy.connect(carol).getSentProfileIds(3)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(carol).getReceivedProfileIds(3)).to.be.deep.equals([])
    expect(await icecandy.connect(carol).getSentIceCandies(3)).to.be.deep.equals([
      [BigNumber.from(3), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(carol).getReceivedIceCandies(3)).to.be.deep.equals([])

    // check score of bob
    const score2 = await score.connect(alice).getScore(2)
    expect(score2[0]?.point).to.be.equals(BigNumber.from(220))
    expect(score2[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score2[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of carol
    const score3 = await score.connect(alice).getScore(3)
    expect(score3[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score3[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score3[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of bob
    const flavor2 = await flavor.connect(bob).getFlavor(2)
    expect(flavor2.length).to.be.equals(2)
    expect(flavor2[0]?.flavorType).to.be.equals(0)
    expect(flavor2[1]?.flavorType).to.be.equals(1)

    // check flavor of carol
    const flavor3 = await flavor.connect(carol).getFlavor(3)
    expect(flavor3.length).to.be.equals(1)
    expect(flavor3[0]?.flavorType).to.be.equals(0)
  })

  it('failed to send icecandy from carol, because carol has no active token', async () => {
    // carol send icecandy to bob
    await expect(icecandy.connect(carol).send(2, nft.address, 1)).to.be.revertedWith(
      "IceCandy: you don't have a IceCandy"
    )
  })

  it('owner airdrop icecandy to alice', async () => {
    // mint icecandy to alice
    const _tx = await icecandy.connect(owner).mint(alice.address)
    await expect(_tx)
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 6)
      .to.emit(icecandy, 'Mint')
      .withArgs(6, alice.address, 0, await ethers.provider.getBlockNumber())

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(2)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(0)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)
  })

  it('failed to airdrop icecandy to bob, because bob has active token', async () => {
    // mint icecandy to bob
    await expect(icecandy.connect(owner).mint(bob.address)).to.be.revertedWith('IceCandy: only one mint per address')
  })

  it('alice transfer lucky icecandy to carol', async () => {
    await expect(icecandy.connect(alice).transferFrom(alice.address, carol.address, 4))
      .to.emit(icecandy, 'Transfer')
      .withArgs(alice.address, carol.address, 4)

    // check icecandy 4
    const icecandy4_ = await icecandy.connect(alice).getIceCandy(4)
    expect(icecandy4_.iceCandyType).to.equal(2)
    expect(icecandy4_.sentProfileId).to.equal(0)
    expect(icecandy4_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy4_.sentModuleId).to.equal(0)
    expect(await icecandy.connect(alice).ownerOf(4)).to.be.equals(carol.address)
    expect(await icecandy.connect(alice).tokenURI(4)).to.be.equals(tokenURI.lucky)

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(0)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of carol
    expect(await icecandy.connect(carol).balanceOf(carol.address)).to.be.equals(2)
    expect(await icecandy.connect(carol).balanceOfRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfNotRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfLucky(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfUnlucky(carol.address)).to.be.equals(1)

    expect(await icecandy.connect(carol).numberOfSentProfiles(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedProfiles(3)).to.be.equals(0)
    expect(await icecandy.connect(carol).numberOfSentIceCandies(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedIceCandies(3)).to.be.equals(0)

    expect(await icecandy.connect(carol).getSentProfileIds(3)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(carol).getReceivedProfileIds(3)).to.be.deep.equals([])
    expect(await icecandy.connect(carol).getSentIceCandies(3)).to.be.deep.equals([
      [BigNumber.from(3), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(carol).getReceivedIceCandies(3)).to.be.deep.equals([])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of carol
    const score3 = await score.connect(alice).getScore(3)
    expect(score3[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score3[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score3[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)

    // check flavor of carol
    const flavor3 = await flavor.connect(carol).getFlavor(3)
    expect(flavor3.length).to.be.equals(1)
    expect(flavor3[0]?.flavorType).to.be.equals(0)
  })

  it('carol transfer unlucky icecandy to alice', async () => {
    await expect(icecandy.connect(carol).transferFrom(carol.address, alice.address, 5))
      .to.emit(icecandy, 'Transfer')
      .withArgs(carol.address, alice.address, 5)

    // check icecandy 5
    const icecandy5_ = await icecandy.connect(carol).getIceCandy(5)
    expect(icecandy5_.iceCandyType).to.equal(3)
    expect(icecandy5_.sentProfileId).to.equal(0)
    expect(icecandy5_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy5_.sentModuleId).to.equal(0)
    expect(await icecandy.connect(carol).ownerOf(5)).to.be.equals(alice.address)
    expect(await icecandy.connect(carol).tokenURI(5)).to.be.equals(tokenURI.unlucky)

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(2)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(1)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of carol
    expect(await icecandy.connect(carol).balanceOf(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfNotRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfLucky(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfUnlucky(carol.address)).to.be.equals(0)

    expect(await icecandy.connect(carol).numberOfSentProfiles(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedProfiles(3)).to.be.equals(0)
    expect(await icecandy.connect(carol).numberOfSentIceCandies(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedIceCandies(3)).to.be.equals(0)

    expect(await icecandy.connect(carol).getSentProfileIds(3)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(carol).getReceivedProfileIds(3)).to.be.deep.equals([])
    expect(await icecandy.connect(carol).getSentIceCandies(3)).to.be.deep.equals([
      [BigNumber.from(3), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(carol).getReceivedIceCandies(3)).to.be.deep.equals([])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of carol
    const score3 = await score.connect(alice).getScore(3)
    expect(score3[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score3[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score3[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)

    // check flavor of carol
    const flavor3 = await flavor.connect(carol).getFlavor(3)
    expect(flavor3.length).to.be.equals(1)
    expect(flavor3[0]?.flavorType).to.be.equals(0)
  })

  it('bob transfer revealed icecandy to alice', async () => {
    await expect(icecandy.connect(bob).transferFrom(bob.address, alice.address, 1))
      .to.emit(icecandy, 'Transfer')
      .withArgs(bob.address, alice.address, 1)

    // check icecandy 1
    const icecandy1_ = await icecandy.connect(alice).getIceCandy(1)
    expect(icecandy1_.iceCandyType).to.equal(1)
    expect(icecandy1_.sentProfileId).to.equal(2)
    expect(icecandy1_.sentModule).to.equal(nft.address)
    expect(icecandy1_.sentModuleId).to.equal(1)
    expect(await icecandy.connect(bob).ownerOf(1)).to.be.equals(alice.address)
    expect(await icecandy.connect(bob).tokenURI(1)).to.be.equals(tokenURI.revealed.purple)

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(1)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of bob
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(2)
    expect(await icecandy.connect(bob).balanceOfRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfNotRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfLucky(bob.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOfUnlucky(bob.address)).to.be.equals(0)

    expect(await icecandy.connect(bob).numberOfSentProfiles(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedProfiles(2)).to.be.equals(2)
    expect(await icecandy.connect(bob).numberOfSentIceCandies(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedIceCandies(2)).to.be.equals(2)

    expect(await icecandy.connect(bob).getSentProfileIds(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedProfileIds(2)).to.be.deep.equals([
      BigNumber.from(1),
      BigNumber.from(3),
    ])
    expect(await icecandy.connect(bob).getSentIceCandies(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedIceCandies(2)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(1), nft.address, BigNumber.from(1)],
      [BigNumber.from(3), BigNumber.from(3), nft.address, BigNumber.from(1)],
    ])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(110))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of bob
    const score2 = await score.connect(alice).getScore(2)
    expect(score2[0]?.point).to.be.equals(BigNumber.from(220))
    expect(score2[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score2[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)

    // check flavor of bob
    const flavor2 = await flavor.connect(bob).getFlavor(2)
    expect(flavor2.length).to.be.equals(2)
    expect(flavor2[0]?.flavorType).to.be.equals(0)
    expect(flavor2[1]?.flavorType).to.be.equals(1)
  })

  it('failed to transfer not revealed icecandy, because only owner can use not revealed icecandy', async () => {
    await expect(icecandy.connect(bob).transferFrom(bob.address, alice.address, 2)).to.be.revertedWith(
      "IceCandy: not revealed can't transfer"
    )
  })

  it('failed to transfer icecandy 4 from bob, because bob is not owner', async () => {
    // owner of token 4 is carol
    expect(await icecandy.connect(bob).ownerOf(4)).to.be.equals(carol.address)

    // transfer is reverted
    await expect(icecandy.connect(bob).transferFrom(bob.address, alice.address, 4)).to.be.revertedWith(
      'ERC721: caller is not token owner nor approved'
    )
  })

  it('alice send icecandy to bob', async () => {
    // alice send icecandy to bob
    const _tx = await icecandy.connect(alice).send(2, nft.address, 1)
    await expect(_tx)
      .to.emit(icecandy, 'Transfer')
      .withArgs(alice.address, bob.address, 1)
      .to.emit(icecandy, 'Sent')
      .withArgs(6, 1, 2, nft.address, 1, await ethers.provider.getBlockNumber())
      .to.emit(icecandy, 'Mint')
      .withArgs(7, alice.address, 3, await ethers.provider.getBlockNumber())

    // check icecandy 6
    const icecandy6_ = await icecandy.connect(alice).getIceCandy(6)
    expect(icecandy6_.iceCandyType).to.equal(1)
    expect(icecandy6_.sentProfileId).to.equal(2)
    expect(icecandy6_.sentModule).to.equal(nft.address)
    expect(icecandy6_.sentModuleId).to.equal(1)
    expect(await icecandy.connect(bob).ownerOf(6)).to.be.equals(bob.address)
    expect(await icecandy.connect(bob).tokenURI(6)).to.be.equals(tokenURI.revealed.sushi)

    // check icecandy 7
    const icecandy7_ = await icecandy.connect(alice).getIceCandy(7)
    expect(icecandy7_.iceCandyType).to.equal(3)
    expect(icecandy7_.sentProfileId).to.equal(0)
    expect(icecandy7_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy7_.sentModuleId).to.equal(0)
    expect(await icecandy.connect(alice).ownerOf(7)).to.be.equals(alice.address)
    expect(await icecandy.connect(alice).tokenURI(7)).to.be.equals(tokenURI.unlucky)

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(2)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(2)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
      [BigNumber.from(6), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of bob
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(3)
    expect(await icecandy.connect(bob).balanceOfRevealed(bob.address)).to.be.equals(2)
    expect(await icecandy.connect(bob).balanceOfNotRevealed(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfLucky(bob.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOfUnlucky(bob.address)).to.be.equals(0)

    expect(await icecandy.connect(bob).numberOfSentProfiles(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedProfiles(2)).to.be.equals(2)
    expect(await icecandy.connect(bob).numberOfSentIceCandies(2)).to.be.equals(0)
    expect(await icecandy.connect(bob).numberOfReceivedIceCandies(2)).to.be.equals(3)

    expect(await icecandy.connect(bob).getSentProfileIds(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedProfileIds(2)).to.be.deep.equals([
      BigNumber.from(1),
      BigNumber.from(3),
    ])
    expect(await icecandy.connect(bob).getSentIceCandies(2)).to.be.deep.equals([])
    expect(await icecandy.connect(bob).getReceivedIceCandies(2)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(1), nft.address, BigNumber.from(1)],
      [BigNumber.from(3), BigNumber.from(3), nft.address, BigNumber.from(1)],
      [BigNumber.from(6), BigNumber.from(1), nft.address, BigNumber.from(1)],
    ])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(120))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of bob
    const score2 = await score.connect(alice).getScore(2)
    expect(score2[0]?.point).to.be.equals(BigNumber.from(230))
    expect(score2[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score2[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)

    // check flavor of bob
    const flavor2 = await flavor.connect(bob).getFlavor(2)
    expect(flavor2.length).to.be.equals(2)
    expect(flavor2[0]?.flavorType).to.be.equals(0)
    expect(flavor2[1]?.flavorType).to.be.equals(1)
  })

  it('owner mint icecandy to alice', async () => {
    // mint icecandy to alice
    const _tx = await icecandy.connect(owner).mint(alice.address)
    await expect(_tx)
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 8)
      .to.emit(icecandy, 'Mint')
      .withArgs(8, alice.address, 0, await ethers.provider.getBlockNumber())

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(4)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(2)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(1)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(2)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
      [BigNumber.from(6), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(120))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(1)
    expect(flavor1[0]?.flavorType).to.be.equals(0)
  })

  it('alice send icecandy to carol', async () => {
    // alice send icecandy to bob
    const _tx = await icecandy.connect(alice).send(3, nft.address, 1)
    await expect(_tx)
      .to.emit(icecandy, 'Transfer')
      .withArgs(alice.address, bob.address, 1)
      .to.emit(icecandy, 'Sent')
      .withArgs(8, 1, 3, nft.address, 1, await ethers.provider.getBlockNumber())
      .to.emit(icecandy, 'Mint')
      .withArgs(9, alice.address, 3, await ethers.provider.getBlockNumber())

    // check icecandy 8
    const icecandy8_ = await icecandy.connect(alice).getIceCandy(8)
    expect(icecandy8_.iceCandyType).to.equal(1)
    expect(icecandy8_.sentProfileId).to.equal(3)
    expect(icecandy8_.sentModule).to.equal(nft.address)
    expect(icecandy8_.sentModuleId).to.equal(1)
    expect(await icecandy.connect(bob).ownerOf(8)).to.be.equals(carol.address)
    expect(await icecandy.connect(bob).tokenURI(8)).to.be.equals(tokenURI.revealed.purple)

    // check icecandy 9
    const icecandy9_ = await icecandy.connect(alice).getIceCandy(9)
    expect(icecandy9_.iceCandyType).to.equal(3)
    expect(icecandy9_.sentProfileId).to.equal(0)
    expect(icecandy9_.sentModule).to.equal(ethers.constants.AddressZero)
    expect(icecandy9_.sentModuleId).to.equal(0)
    expect(await icecandy.connect(alice).ownerOf(9)).to.be.equals(alice.address)
    expect(await icecandy.connect(alice).tokenURI(9)).to.be.equals(tokenURI.unlucky)

    // get balance of alice
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(4)
    expect(await icecandy.connect(alice).balanceOfRevealed(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfNotRevealed(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfLucky(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfUnlucky(alice.address)).to.be.equals(3)

    expect(await icecandy.connect(alice).numberOfSentProfiles(1)).to.be.equals(2)
    expect(await icecandy.connect(alice).numberOfReceivedProfiles(1)).to.be.equals(0)
    expect(await icecandy.connect(alice).numberOfSentIceCandies(1)).to.be.equals(3)
    expect(await icecandy.connect(alice).numberOfReceivedIceCandies(1)).to.be.equals(0)

    expect(await icecandy.connect(alice).getSentProfileIds(1)).to.be.deep.equals([BigNumber.from(2), BigNumber.from(3)])
    expect(await icecandy.connect(alice).getReceivedProfileIds(1)).to.be.deep.equals([])
    expect(await icecandy.connect(alice).getSentIceCandies(1)).to.be.deep.equals([
      [BigNumber.from(1), BigNumber.from(2), nft.address, BigNumber.from(1)],
      [BigNumber.from(6), BigNumber.from(2), nft.address, BigNumber.from(1)],
      [BigNumber.from(8), BigNumber.from(3), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(alice).getReceivedIceCandies(1)).to.be.deep.equals([])

    // check balance of carol
    expect(await icecandy.connect(carol).balanceOf(carol.address)).to.be.equals(2)
    expect(await icecandy.connect(carol).balanceOfRevealed(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfNotRevealed(carol.address)).to.be.equals(0)
    expect(await icecandy.connect(carol).balanceOfLucky(carol.address)).to.be.equals(1)
    expect(await icecandy.connect(carol).balanceOfUnlucky(carol.address)).to.be.equals(0)

    expect(await icecandy.connect(carol).numberOfSentProfiles(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedProfiles(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfSentIceCandies(3)).to.be.equals(1)
    expect(await icecandy.connect(carol).numberOfReceivedIceCandies(3)).to.be.equals(1)

    expect(await icecandy.connect(carol).getSentProfileIds(3)).to.be.deep.equals([BigNumber.from(2)])
    expect(await icecandy.connect(carol).getReceivedProfileIds(3)).to.be.deep.equals([BigNumber.from(1)])
    expect(await icecandy.connect(carol).getSentIceCandies(3)).to.be.deep.equals([
      [BigNumber.from(3), BigNumber.from(2), nft.address, BigNumber.from(1)],
    ])
    expect(await icecandy.connect(carol).getReceivedIceCandies(3)).to.be.deep.equals([
      [BigNumber.from(8), BigNumber.from(1), nft.address, BigNumber.from(1)],
    ])

    // check score of alice
    const score1 = await score.connect(alice).getScore(1)
    expect(score1[0]?.point).to.be.equals(BigNumber.from(230))
    expect(score1[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score1[2]?.point).to.be.equals(BigNumber.from(20))

    // check score of carol
    const score3 = await score.connect(alice).getScore(3)
    expect(score3[0]?.point).to.be.equals(BigNumber.from(220))
    expect(score3[1]?.point).to.be.equals(BigNumber.from(20))
    expect(score3[2]?.point).to.be.equals(BigNumber.from(20))

    // check flavor of alice
    const flavor1 = await flavor.connect(alice).getFlavor(1)
    expect(flavor1.length).to.be.equals(2)
    expect(flavor1[0]?.flavorType).to.be.equals(0)
    expect(flavor1[1]?.flavorType).to.be.equals(1)

    // check flavor of carol
    const flavor3 = await flavor.connect(carol).getFlavor(3)
    expect(flavor3.length).to.be.equals(2)
    expect(flavor3[0]?.flavorType).to.be.equals(0)
    expect(flavor3[1]?.flavorType).to.be.equals(1)
  })
})
