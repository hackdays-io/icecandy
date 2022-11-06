import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-solhint'
import 'solidity-coverage'
import 'hardhat-gas-reporter'
import 'hardhat-interface-generator'
import 'hardhat-contract-sizer'
import * as dotenv from 'dotenv'

const PATH_TO_HARDHAT_ENV = `${__dirname}/.env`
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const LOCAL_PRIVATE_KEY = process.env.LOCAL_PRIVATE_KEY
/*
const ALICE = process.env.ALICE_PRIVATE_KEY
const BOB = process.env.BOB_PRIVATE_KEY
const CAROL = process.env.CAROL_PRIVATE_KEY
const DANIEL = process.env.DANIEL_PRIVATE_KEY
const EVE = process.env.EVE_PRIVATE_KEY
*/
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
      // accounts: [`${PRIVATE_KEY}`, `${ALICE}`, `${BOB}`, `${CAROL}`, `${DANIEL}`, `${EVE}`],
    },
    local: {
      url: 'http://localhost:8545',
      accounts: [`${LOCAL_PRIVATE_KEY}`],
      // accounts: [`${LOCAL_PRIVATE_KEY}`, `${ALICE}`, `${BOB}`, `${CAROL}`, `${DANIEL}`, `${EVE}`],
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
    token: 'ETH',
  },
}
