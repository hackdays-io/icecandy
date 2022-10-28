import { Alchemy, Network } from 'alchemy-sdk'

export const useEthereumAlchemyClient = () => {
  const settings: any = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ETH),
    network: Network.ETH_GOERLI,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}

export const usePolygonAlchemyClient = () => {
  const settings: any = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_POLYGON),
    network: Network.MATIC_MAINNET,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}

export const useArbitrumAlchemyClient = () => {
  const settings: any = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_ARBITRUM),
    network: Network.ARB_GOERLI,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}
