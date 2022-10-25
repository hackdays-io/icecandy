import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { ethers } from 'hardhat'
import { IceCandyAssetStore, IceCandyAssetStoreProvider } from '../typechain-types'

describe('icecandy assetstore test', () => {
  let owner: SignerWithAddress
  let creator: SignerWithAddress
  let user: SignerWithAddress
  let assetStore: IceCandyAssetStore
  let assetProvider: IceCandyAssetStoreProvider

  before(async () => {
    const signers = await ethers.getSigners()
    owner = signers[0] as SignerWithAddress
    creator = signers[1] as SignerWithAddress
    user = signers[2] as SignerWithAddress

    const fAssetStore = await ethers.getContractFactory('IceCandyAssetStore')
    assetStore = await fAssetStore.deploy()
    await assetStore.deployed()

    const fAssetProvider = await ethers.getContractFactory('IceCandyAssetStoreProvider')
    assetProvider = await fAssetProvider.deploy(assetStore.address)
    await assetProvider.deployed()
  })

  it('create asset', async () => {
    await assetStore.connect(owner).registerAsset('name1', 'uri1')
    assetStore.setCreatorWhitelistStatus(creator.address, true)
    await assetStore.connect(creator).registerAsset('name2', 'uri2')
    const firstAsset = await assetProvider.getAsset(1)
    const secondAsset = await assetProvider.getAsset(2)
    expect(firstAsset.assetURI).equal('uri1')
    expect(secondAsset.assetURI).equal('uri2')
  })

  it('reverted with not whitelisted', async () => {
    await expect(assetStore.connect(user).registerAsset('name1', 'uri1')).to.be.revertedWith('You are not listed')
  })

  it('payout to creator', async () => {
    const creatorBalancePrev = await creator.getBalance()
    await assetProvider.connect(user).processPayout(2, { value: 100000000 })
    const creatorBalance = await creator.getBalance()

    expect(creatorBalance.sub(creatorBalancePrev).toNumber()).equal(100000000)
  })
})
