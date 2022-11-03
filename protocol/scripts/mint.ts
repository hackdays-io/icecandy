import { ethers } from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { IceCandy__factory } from '../typechain-types'
import * as dotenv from 'dotenv'
const PATH_TO_HARDHAT_ENV = `${__dirname}/.env`
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

async function main() {
  const deployer = (await ethers.getSigners())[0] as SignerWithAddress
  if (process.env.LOCAL_USER_ADDRESS && process.env.ICECANDY_ADDRESS) {
    await IceCandy__factory.connect(process.env.ICECANDY_ADDRESS, deployer).mint(process.env.LOCAL_USER_ADDRESS)
  }
  if (process.env.LOCAL_USER_ADDRESS_2 && process.env.ICECANDY_ADDRESS) {
    await IceCandy__factory.connect(process.env.ICECANDY_ADDRESS, deployer).mint(process.env.LOCAL_USER_ADDRESS_2)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
