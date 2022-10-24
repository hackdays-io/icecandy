import { Alchemy } from 'alchemy-sdk'

export const useAlchemyClient = () => {
  const settings: any = {
    apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY), // Replace with your Alchemy API Key.
    network: String(process.env.NEXT_PUBLIC_CHAIN_NAME),
  }
  const alchemy = new Alchemy(settings)
  return alchemy
}
