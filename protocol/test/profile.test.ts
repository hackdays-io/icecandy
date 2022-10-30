import { ethers } from 'hardhat'
import { expect } from 'chai'
import {
  IceCandy,
  Profile,
  Globals,
  NFTCollectionModule,
  POAPCollectionModule,
  SNSAccountModule,
  ScoreModule,
  MirrorModule,
  ColorExtension,
} from '../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber } from 'ethers'

describe('profile test', () => {
  let owner: SignerWithAddress
  let alice: SignerWithAddress
  let bob: SignerWithAddress
  let carol: SignerWithAddress
  let daniel: SignerWithAddress
  let profile: Profile
  let icecandy: IceCandy
  let globals: Globals
  let nftCollection: NFTCollectionModule
  let snsAccount: SNSAccountModule
  let poapCollection: POAPCollectionModule
  let score: ScoreModule
  let mirror: MirrorModule
  let color: ColorExtension

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
    const fIceCandy = await ethers.getContractFactory('IceCandy')
    icecandy = await fIceCandy.deploy(owner.address)
    const fGlobals = await ethers.getContractFactory('Globals')
    globals = await fGlobals.deploy(owner.address)
    const fNFTCollection = await ethers.getContractFactory('NFTCollectionModule')
    nftCollection = await fNFTCollection.deploy(owner.address)
    const fPOAPCollection = await ethers.getContractFactory('POAPCollectionModule')
    poapCollection = await fPOAPCollection.deploy(owner.address)
    const fSNSAccount = await ethers.getContractFactory('SNSAccountModule')
    snsAccount = await fSNSAccount.deploy(owner.address)
    const fScore = await ethers.getContractFactory('ScoreModule')
    score = await fScore.deploy(owner.address)
    const fMirror = await ethers.getContractFactory('MirrorModule')
    mirror = await fMirror.deploy(owner.address)
    const fColor = await ethers.getContractFactory('ColorExtension')
    color = await fColor.deploy(owner.address)

    // setup
    await icecandy.setGlobals(globals.address)
    await profile.setGlobals(globals.address)
    await nftCollection.setGlobals(globals.address)
    await poapCollection.setGlobals(globals.address)
    await snsAccount.setGlobals(globals.address)
    await score.setGlobals(globals.address)
    await mirror.setGlobals(globals.address)
    await color.setGlobals(globals.address)
    await globals.setIceCandy(icecandy.address)
    await globals.setProfile(profile.address)
    await globals.setNFTCollectionModule(nftCollection.address)
    await globals.setPOAPCollectionModule(poapCollection.address)
    await globals.setSNSAccountModule(snsAccount.address)
    await globals.setScoreModule(score.address)
    await globals.setMirrorModule(mirror.address)
    await globals.setColorExtension(color.address)
  })

  it('createProfile()', async () => {
    const _profile = {
      name: 'hogehoge',
      introduction: 'fugafuga',
      imageURI: 'https://image.com',
      nfts: [
        {
          chainId: 1,
          contractAddress: '0x0000000000000000000000000000000000000001',
          tokenId: 1,
          tokenURI: '',
          owner: alice.address,
        },
        {
          chainId: 137,
          contractAddress: '0x0000000000000000000000000000000000000001',
          tokenId: 1,
          tokenURI: 'https://polygon.com/1',
          owner: alice.address,
        },
      ],
      poaps: [
        {
          chainId: 1,
          contractAddress: '0x0000000000000000000000000000000000000002',
          tokenId: 2,
          tokenURI: '',
          owner: alice.address,
        },
        {
          chainId: 137,
          contractAddress: '0x0000000000000000000000000000000000000002',
          tokenId: 2,
          tokenURI: 'https://polygon.com/2',
          owner: alice.address,
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
      .withArgs(1, alice.address, await ethers.provider.getBlockNumber())
      .to.emit(icecandy, 'Transfer')
      .withArgs(owner.address, alice.address, 1)
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, nftCollection.address, await ethers.provider.getBlockNumber())
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, poapCollection.address, await ethers.provider.getBlockNumber())

    // get profile
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
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x0000000000000000000000000000000000000003',
        tokenId: 3,
        tokenURI: '',
        owner: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x0000000000000000000000000000000000000003',
        tokenId: 3,
        tokenURI: 'https://polygon.com/3',
        owner: alice.address,
      },
    ]
    // send transaction
    const _tx = await profile.connect(alice).createNFTCollection(1, _nfts)
    await expect(_tx)
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, nftCollection.address, await ethers.provider.getBlockNumber())

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
    const _poaps = [
      {
        chainId: 1,
        contractAddress: '0x0000000000000000000000000000000000000004',
        tokenId: 4,
        tokenURI: '',
        owner: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x0000000000000000000000000000000000000004',
        tokenId: 4,
        tokenURI: 'https://polygon.com/4',
        owner: alice.address,
      },
    ]
    // send transaction
    const _tx = await profile.connect(alice).createPOAPCollection(1, _poaps)
    await expect(_tx)
      .to.emit(profile, 'NFTCollectionCreated')
      .withArgs(1, poapCollection.address, await ethers.provider.getBlockNumber())

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

  it('createScore()', async () => {
    // send transaction
    const _tx = await profile.connect(alice).createScore(1)
    await expect(_tx)
      .to.emit(profile, 'ScoreCreated')
      .withArgs(1, await ethers.provider.getBlockNumber())

    // get score
    const scores_ = await profile.connect(alice).getScore(1)
    expect(scores_[0]?.name).to.equal('PROFILE')
    expect(scores_[0]?.point).to.equal(300)
    expect(scores_[1]?.name).to.equal('NFT')
    expect(scores_[1]?.point).to.equal(100)
    expect(scores_[2]?.name).to.equal('POAP')
    expect(scores_[2]?.point).to.equal(200)
  })

  it('addMirror()', async () => {
    const _mirror = {
      hoge: 'fuga',
    }
    // send transaction
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
    const _sns = [
      {
        service: 'github',
        userId: 'hello_world',
        userPageURL: 'https://github.com/hello_world',
        wallet: alice.address,
      },
      {
        service: 'twitter',
        userId: 'hello',
        userPageURL: 'https://twitter.com/hello',
        wallet: alice.address,
      },
    ]
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

    // get profile
    const profile_ = await profile.connect(alice).getProfile(1)
    expect(profile_.wallets[0]).to.equal(alice.address)
    expect(profile_.wallets[1]).to.equal(bob.address)
  })

  it('approve', async () => {
    const _nfts = [
      {
        chainId: 1,
        contractAddress: '0x0000000000000000000000000000000000000005',
        tokenId: 5,
        tokenURI: '',
        owner: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x0000000000000000000000000000000000000005',
        tokenId: 5,
        tokenURI: 'https://polygon.com/5',
        owner: alice.address,
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
        contractAddress: '0x0000000000000000000000000000000000000006',
        tokenId: 6,
        tokenURI: '',
        owner: alice.address,
      },
      {
        chainId: 137,
        contractAddress: '0x0000000000000000000000000000000000000006',
        tokenId: 6,
        tokenURI: 'https://polygon.com/6',
        owner: alice.address,
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
