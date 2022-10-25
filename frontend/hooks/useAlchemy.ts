import { Alchemy, Network } from 'alchemy-sdk'

// ToDo change usePolygonAlchemyClient
export const useAlchemyClient = () => {
  const settings: any = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_POLYGON), // Replace with your Alchemy API Key.
    network: Network.MATIC_MUMBAI,
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}
