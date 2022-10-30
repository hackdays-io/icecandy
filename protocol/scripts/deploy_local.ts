import { ethers } from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { setBalance } from '@nomicfoundation/hardhat-network-helpers'
import * as dotenv from 'dotenv'
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

  // NFTCollectionModule
  const fNFTModule = await ethers.getContractFactory('NFTCollectionModule')
  const nftModule = await fNFTModule.deploy(profile.address)
  console.log('NFTCollectionModule address:', nftModule.address)

  // POAPCollectionModule
  const fPOAPModule = await ethers.getContractFactory('POAPCollectionModule')
  const poapModule = await fPOAPModule.deploy(profile.address)
  console.log('POAPCollectionModule address:', poapModule.address)

  // SNSAccountModule
  const fSNSAccount = await ethers.getContractFactory('SNSAccountModule')
  const snsAccountModule = await fSNSAccount.deploy(profile.address)
  console.log('SNSAccountModule address:', snsAccountModule.address)

  // IceCandy
  const fIceCandy = await ethers.getContractFactory('IceCandy')
  const icecandy = await fIceCandy.deploy(deployer.address)
  console.log('IceCandy address:', icecandy.address)

  // Score
  const fScore = await ethers.getContractFactory('ScoreModule')
  const score = await fScore.deploy(deployer.address)

  //Mirror
  const fMirror = await ethers.getContractFactory('MirrorModule')
  const mirror = await fMirror.deploy(deployer.address)

  // setup
  await profile.setNFTCollectionModule(nftModule.address)
  await profile.setPOAPCollectionModule(poapModule.address)
  await profile.setSNSAccountModule(snsAccountModule.address)
  await profile.setIceCandy(icecandy.address)
  await profile.setScoreModule(score.address)
  await profile.setMirrorModule(mirror.address)

  await score.setProfile(profile.address)
  await score.setNFTCollectionModule(nftModule.address)
  await score.setPOAPCollectionModule(poapModule.address)
  await icecandy.setProfile(profile.address)
  await mirror.setProfile(profile.address)

  if (process.env.LOCAL_USER_ADDRESS) {
    await setBalance(process.env.LOCAL_USER_ADDRESS, 100n ** 9n)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
