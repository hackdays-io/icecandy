import { ethers } from 'hardhat'
import { expect } from 'chai'
import { IceCandy } from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

describe('icecandy test', () => {
  let owner: SignerWithAddress
  let alice: SignerWithAddress
  let bob: SignerWithAddress
  let carol: SignerWithAddress
  let icecandy: IceCandy

  before(async () => {
    // signers
    const signers = await ethers.getSigners()
    owner = signers[0] as SignerWithAddress
    alice = signers[1] as SignerWithAddress
    bob = signers[2] as SignerWithAddress
    carol = signers[3] as SignerWithAddress

    // deploy contracts
    const fIceCandy = await ethers.getContractFactory('IceCandy')
    icecandy = await fIceCandy.deploy(owner.address)
  })

  it('mint()', async () => {
    // send transaction
    await expect(icecandy.connect(owner).mint(alice.address))
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 1)

    // get icecandy token
    expect(await icecandy.connect(alice).isEaten(1)).to.equal(false)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).ownerOf(1)).to.be.equals(alice.address)
    expect(await icecandy.connect(alice).tokenURI(1)).to.be.equals('http://example.com/1')
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(1)
  })

  it('eat()', async () => {
    // send transaction
    const _tx = await icecandy.connect(alice).eat(1)
    await expect(_tx)
      .to.emit(icecandy, 'Eaten')
      .withArgs(1, alice.address, await ethers.provider.getBlockNumber())

    // get icecandy token
    expect(await icecandy.connect(alice).isEaten(1)).to.equal(true)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(0)
  })

  it('eat() approve pattern', async () => {
    // mint
    await expect(icecandy.connect(owner).mint(alice.address))
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 2)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(2)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(1)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(1)

    // before approval transaction is reverted
    await expect(icecandy.connect(bob).eat(2)).to.be.revertedWith('IceCandy: caller is not owner or approved')

    // approve bob
    await expect(icecandy.connect(alice).approve(bob.address, 2))
      .to.emit(icecandy, 'Approval')
      .withArgs(alice.address, bob.address, 2)

    // after approval transaction is success
    await expect(icecandy.connect(bob).eat(2)).to.emit(icecandy, 'Eaten')
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(2)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(2)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(0)
  })

  it('eat() setApprovalForAll pattern', async () => {
    // mint
    await expect(icecandy.connect(owner).mint(alice.address))
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 3)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(2)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(1)

    // before approval transaction is reverted
    await expect(icecandy.connect(carol).eat(3)).to.be.revertedWith('IceCandy: caller is not owner or approved')

    // set carol to approval for all
    await expect(icecandy.connect(alice).setApprovalForAll(carol.address, true))
      .to.emit(icecandy, 'ApprovalForAll')
      .withArgs(alice.address, carol.address, true)

    // after setting transaction is success
    await expect(icecandy.connect(carol).eat(3)).to.emit(icecandy, 'Eaten')
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(0)
  })

  it('eat() from Profile pattern', async () => {
    // mint
    await expect(icecandy.connect(owner).mint(alice.address))
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 4)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(4)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(1)

    // before setProfile transaction is reverted
    await expect(icecandy.connect(owner).eat(4)).to.be.revertedWith('IceCandy: caller is not owner or approved')

    // set owner address as profile
    await expect(icecandy.connect(owner).setProfile(owner.address))

    // after setting transaction is success
    await expect(icecandy.connect(owner).eat(4)).to.emit(icecandy, 'Eaten')
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(4)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(4)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(0)
  })

  it('transfer() eaten icecandy', async () => {
    await expect(icecandy.connect(alice).transferFrom(alice.address, bob.address, 1))
      .to.emit(icecandy, 'Transfer')
      .withArgs(alice.address, bob.address, 1)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfEaten(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfNotEaten(bob.address)).to.be.equals(0)
  })

  it('transfer() not eaten icecandy', async () => {
    // mint
    await expect(icecandy.connect(owner).mint(alice.address))
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, alice.address, 5)

    await expect(icecandy.connect(alice).transferFrom(alice.address, bob.address, 5))
      .to.emit(icecandy, 'Transfer')
      .withArgs(alice.address, bob.address, 5)
    expect(await icecandy.connect(alice).balanceOf(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfEaten(alice.address)).to.be.equals(3)
    expect(await icecandy.connect(alice).balanceOfNotEaten(alice.address)).to.be.equals(0)
    expect(await icecandy.connect(bob).balanceOf(bob.address)).to.be.equals(2)
    expect(await icecandy.connect(bob).balanceOfEaten(bob.address)).to.be.equals(1)
    expect(await icecandy.connect(bob).balanceOfNotEaten(bob.address)).to.be.equals(1)
  })
})
