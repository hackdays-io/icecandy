import { ethers } from 'hardhat'
import { expect } from 'chai'
import { Profile } from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

describe('Integration test', () => {
  let deployer: SignerWithAddress
  let user: SignerWithAddress
  let profile: Profile

  before(async () => {
    // signers
    const signers = await ethers.getSigners()
    deployer = signers[0] as SignerWithAddress
    user = signers[1] as SignerWithAddress

    // contracts
    const fProfile = await ethers.getContractFactory('Profile')
    profile = await fProfile.deploy()
  })

  it('create profile', async () => {
    // send transaction
    const tx = await profile.connect(user).createProfile({
      to: user.address,
      handle: 'hogehoge',
      imageURI: 'https://example.com',
    })
    await expect(tx)
      .to.emit(profile, 'ProfileCreated')
      .withArgs(
        1,
        user.address,
        user.address,
        'hogehoge',
        'https://example.com',
        await ethers.provider.getBlockNumber()
      )

    // get profile struct
    const _profile = await profile.connect(user).getProfile(1)
    expect(_profile.handle).to.equal('hogehoge')
    expect(_profile.imageURI).to.equal('https://example.com')

    // get profile token
    expect(await profile.connect(user).balanceOf(user.address)).to.be.equals(1)
    expect(await profile.connect(user).ownerOf(1)).to.be.equals(user.address)
    expect(await profile.connect(user).tokenURI(1)).to.be.equals('http://example.com/1')
  })
})
