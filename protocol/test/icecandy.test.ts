import { ethers } from 'hardhat'
import { expect } from 'chai'
import { IceCandy } from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

describe('icecandy test', () => {
  let owner: SignerWithAddress
  let user: SignerWithAddress
  let icecandy: IceCandy

  before(async () => {
    // signers
    const signers = await ethers.getSigners()
    owner = signers[0] as SignerWithAddress
    user = signers[1] as SignerWithAddress

    // deploy contracts
    const fIceCandy = await ethers.getContractFactory('IceCandy')
    icecandy = await fIceCandy.deploy(owner.address)
  })

  it('mint()', async () => {
    // send transaction
    await expect(icecandy.connect(owner).mint(user.address))
      .to.emit(icecandy, 'Transfer')
      .withArgs(ethers.constants.AddressZero, user.address, 1)

    // get icecandy token
    expect(await icecandy.connect(user).isEaten(1)).to.equal(false)
    expect(await icecandy.connect(user).balanceOf(user.address)).to.be.equals(1)
    expect(await icecandy.connect(user).ownerOf(1)).to.be.equals(user.address)
    expect(await icecandy.connect(user).tokenURI(1)).to.be.equals('http://example.com/1')
  })

  it('eat()', async () => {
    // revert transaction
    await expect(icecandy.connect(owner).eat(1)).to.be.revertedWith('IceCandy: only token holder')

    // success transaction
    const _tx = await icecandy.connect(user).eat(1)
    await expect(_tx)
      .to.emit(icecandy, 'Eaten')
      .withArgs(1, user.address, await ethers.provider.getBlockNumber())

    // get icecandy token
    expect(await icecandy.connect(user).isEaten(1)).to.equal(true)
  })
})
