import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-solhint'
import 'solidity-coverage'
import 'hardhat-gas-reporter'
import 'hardhat-interface-generator'
import * as dotenv from 'dotenv'

const PATH_TO_HARDHAT_ENV = `${__dirname}/.env`
dotenv.config({ path: PATH_TO_HARDHAT_ENV })

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const LOCAL_PRIVATE_KEY = process.env.LOCAL_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY

type NetworkNameKey = 'mumbai' | 'local'
const networks: { [network in NetworkNameKey]?: unknown } = {}

if (ALCHEMY_API_KEY && ALCHEMY_API_KEY !== '' && PRIVATE_KEY && PRIVATE_KEY !== '') {
  networks.mumbai = {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    accounts: [`${PRIVATE_KEY}`],
  }
}

if (LOCAL_PRIVATE_KEY && LOCAL_PRIVATE_KEY !== '') {
  networks.local = {
    url: 'http://localhost:8545',
    accounts: [`${LOCAL_PRIVATE_KEY}`],
    allowUnlimitedContractSize: true,
  }
}

module.exports = {
  solidity: '0.8.10',
  networks,
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
