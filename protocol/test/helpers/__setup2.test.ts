import { ethers } from 'hardhat'
import {
  IceCandy,
  IceCandy__factory,
  Globals,
  Globals__factory,
  Profile,
  Profile__factory,
  NFTCollectionModule,
  NFTCollectionModule__factory,
  POAPCollectionModule,
  POAPCollectionModule__factory,
  SNSAccountModule,
  SNSAccountModule__factory,
  ScoreModule,
  ScoreModule__factory,
  MirrorModule,
  MirrorModule__factory,
  SkillModule,
  SkillModule__factory,
  FlavorExtension,
  FlavorExtension__factory,
} from '../../typechain-types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

// accounts
export let owner: SignerWithAddress
export let alice: SignerWithAddress
export let bob: SignerWithAddress
export let carol: SignerWithAddress
export let daniel: SignerWithAddress
export let eve: SignerWithAddress

// contracts
export let icecandy: IceCandy
export let profile: Profile
export let globals: Globals
export let nft: NFTCollectionModule
export let poap: POAPCollectionModule
export let sns: SNSAccountModule
export let score: ScoreModule
export let mirror: MirrorModule
export let skill: SkillModule
export let flavor: FlavorExtension

before(async () => {
  // set accounts
  const signers = await ethers.getSigners()
  owner = signers[0] as SignerWithAddress
  alice = signers[1] as SignerWithAddress
  bob = signers[2] as SignerWithAddress
  carol = signers[3] as SignerWithAddress
  daniel = signers[4] as SignerWithAddress
  eve = signers[5] as SignerWithAddress

  // set contracts
  icecandy = await new IceCandy__factory(owner).deploy(owner.address)
  profile = await new Profile__factory(owner).deploy(owner.address)
  globals = await new Globals__factory(owner).deploy(owner.address)
  nft = await new NFTCollectionModule__factory(owner).deploy(owner.address)
  poap = await new POAPCollectionModule__factory(owner).deploy(owner.address)
  sns = await new SNSAccountModule__factory(owner).deploy(owner.address)
  score = await new ScoreModule__factory(owner).deploy(owner.address)
  mirror = await new MirrorModule__factory(owner).deploy(owner.address)
  skill = await new SkillModule__factory(owner).deploy(owner.address)
  flavor = await new FlavorExtension__factory(owner).deploy(owner.address)

  // setup address
  await icecandy.setGlobals(globals.address)
  await profile.setGlobals(globals.address)
  await nft.setGlobals(globals.address)
  await poap.setGlobals(globals.address)
  await sns.setGlobals(globals.address)
  await score.setGlobals(globals.address)
  await mirror.setGlobals(globals.address)
  await skill.setGlobals(globals.address)
  await flavor.setGlobals(globals.address)
  await globals.setIceCandy(icecandy.address)
  await globals.setProfile(profile.address)
  await globals.setNFTCollectionModule(nft.address)
  await globals.setPOAPCollectionModule(poap.address)
  await globals.setSNSAccountModule(sns.address)
  await globals.setScoreModule(score.address)
  await globals.setMirrorModule(mirror.address)
  await globals.setSkillModule(skill.address)
  await globals.setFlavorExtension(flavor.address)
})
