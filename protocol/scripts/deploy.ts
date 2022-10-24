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

  // NFTCollectionModule
  const fNFTModule = await ethers.getContractFactory('NFTCollectionModule')
  const nftModule = await fNFTModule.deploy(profile.address)
  console.log('NFTCollectionModule address:', nftModule.address)

  // setup
  await profile.setNFTCollectionModule(nftModule.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
