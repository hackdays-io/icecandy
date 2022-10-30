import { ethers } from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

async function main() {
  // account check
  const deployer = (await ethers.getSigners())[0] as SignerWithAddress
  const balance = (await deployer.getBalance()).toString()
  console.log('deploying contract with the account:', deployer.address)
  console.log('account balance:', balance)

  // Profile
  const fProfile = await ethers.getContractFactory('Profile')
  const profile = await fProfile.deploy(deployer.address)
  console.log('Profile address:', profile.address)

  // Globals
  const fGlobals = await ethers.getContractFactory('Globals')
  const globals = await fGlobals.deploy(deployer.address)
  console.log('Globals address:', globals.address)

  // IceCandy
  const fIceCandy = await ethers.getContractFactory('IceCandy')
  const icecandy = await fIceCandy.deploy(deployer.address)
  console.log('IceCandy address:', icecandy.address)

  // NFTCollectionModule
  const fNFT = await ethers.getContractFactory('NFTCollectionModule')
  const nft = await fNFT.deploy(deployer.address)
  console.log('NFTCollectionModule address:', nft.address)

  // POAPCollectionModule
  const fPOAP = await ethers.getContractFactory('POAPCollectionModule')
  const poap = await fPOAP.deploy(deployer.address)
  console.log('POAPCollectionModule address:', poap.address)

  // SNSAccountModule
  const fSNS = await ethers.getContractFactory('SNSAccountModule')
  const sns = await fSNS.deploy(deployer.address)
  console.log('SNSAccountModule address:', sns.address)

  // ScoreModule
  const fScore = await ethers.getContractFactory('ScoreModule')
  const score = await fScore.deploy(deployer.address)
  console.log('ScoreModule address:', score.address)

  // MirrorModule
  const fMirror = await ethers.getContractFactory('MirrorModule')
  const mirror = await fMirror.deploy(deployer.address)
  console.log('MirrorModule address:', mirror.address)

  // MirrorModule
  const fColor = await ethers.getContractFactory('ColorExtension')
  const color = await fColor.deploy(deployer.address)
  console.log('ColorExtension address:', color.address)

  // setup Globals
  await globals.setIceCandy(icecandy.address)
  await globals.setProfile(profile.address)
  await globals.setNFTCollectionModule(nft.address)
  await globals.setPOAPCollectionModule(poap.address)
  await globals.setSNSAccountModule(sns.address)
  await globals.setScoreModule(score.address)
  await globals.setMirrorModule(mirror.address)
  await globals.setColorExtension(color.address)

  // set globals to other contracts
  await icecandy.setGlobals(globals.address)
  await profile.setGlobals(globals.address)
  await nft.setGlobals(globals.address)
  await poap.setGlobals(globals.address)
  await sns.setGlobals(globals.address)
  await score.setGlobals(globals.address)
  await mirror.setGlobals(globals.address)
  await color.setGlobals(globals.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
