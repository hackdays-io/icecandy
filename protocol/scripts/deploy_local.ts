import { ethers } from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { setBalance } from '@nomicfoundation/hardhat-network-helpers'
import * as dotenv from 'dotenv'
import fs from 'fs'

const PATH_TO_HARDHAT_ENV = `${__dirname}/.env`
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

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

  // SkillModule
  const fSkill = await ethers.getContractFactory('SkillModule')
  const skill = await fSkill.deploy(deployer.address)
  console.log('SkillModule address:', skill.address)

  // ColorExtension
  const fFlavor = await ethers.getContractFactory('FlavorExtension')
  const flavor = await fFlavor.deploy(deployer.address)
  console.log('FlavorExtension address:', flavor.address)

  // setup Globals
  await globals.setIceCandy(icecandy.address)
  await globals.setProfile(profile.address)
  await globals.setNFTCollectionModule(nft.address)
  await globals.setPOAPCollectionModule(poap.address)
  await globals.setSNSAccountModule(sns.address)
  await globals.setScoreModule(score.address)
  await globals.setMirrorModule(mirror.address)
  await globals.setSkillModule(skill.address)
  await globals.setFlavorExtension(flavor.address)

  // set globals to other contracts
  await icecandy.setGlobals(globals.address)
  await profile.setGlobals(globals.address)
  await nft.setGlobals(globals.address)
  await poap.setGlobals(globals.address)
  await sns.setGlobals(globals.address)
  await score.setGlobals(globals.address)
  await mirror.setGlobals(globals.address)
  await skill.setGlobals(globals.address)
  await flavor.setGlobals(globals.address)

  // send ETH and IcCandy
  if (process.env.LOCAL_USER_ADDRESS) {
    await setBalance(process.env.LOCAL_USER_ADDRESS, 100n ** 9n)
    await icecandy.mint(process.env.LOCAL_USER_ADDRESS)
  }
  if (process.env.LOCAL_USER_ADDRESS_2) {
    await setBalance(process.env.LOCAL_USER_ADDRESS_2, 100n ** 9n)
    await icecandy.mint(process.env.LOCAL_USER_ADDRESS_2)
  }

  // write contract address to .env
  const path = '../frontend/.env.local'
  const file = fs
    .readFileSync(path)
    .toString()
    .split('\n')
    .map((e) =>
      e.startsWith('NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS=')
        ? `NEXT_PUBLIC_CONTRACT_PROFILENFT_ADDRESS=${profile.address}`
        : e.startsWith('NEXT_PUBLIC_CONTRACT_ICECANDY_ADDRESS=')
        ? `NEXT_PUBLIC_CONTRACT_ICECANDY_ADDRESS=${icecandy.address}`
        : e
    )
    .join('\n')
  fs.writeFileSync(path, file)

  const path_ = '.env'
  const file_ = fs
    .readFileSync(path_)
    .toString()
    .split('\n')
    .map((e) =>
      e.startsWith('PROFILE_ADDRESS=')
        ? `PROFILE_ADDRESS=${profile.address}`
        : e.startsWith('ICECANDY_ADDRESS=')
        ? `ICECANDY_ADDRESS=${icecandy.address}`
        : e
    )
    .join('\n')
  fs.writeFileSync(path_, file_)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
