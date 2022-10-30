import { Alchemy, AlchemySettings, Network } from 'alchemy-sdk'

export const useEthereumAlchemyClient = () => {
  const settings: AlchemySettings = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ETH),
    network: Network.ETH_MAINNET,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}

export const usePolygonAlchemyClient = () => {
  const settings: AlchemySettings = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_POLYGON),
    network: Network.MATIC_MAINNET,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}

export const useArbitrumAlchemyClient = () => {
  const settings: AlchemySettings = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ARBITRUM),
    network: Network.ARB_GOERLI,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}
