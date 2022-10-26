import * as dotenv from 'dotenv'
import path from 'node:path'

const PATH_TO_HARDHAT_ENV = path.resolve(__dirname, '.env')
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

const LOCAL_PRIVATE_KEY = process.env.LOCAL_PRIVATE_KEY

module.exports = {
  solidity: '0.8.10',
  networks: {
    local: {
      url: 'http://localhost:8545',
      accounts: [`${LOCAL_PRIVATE_KEY}`],
      allowUnlimitedContractSize: true,
    },
  }
}
