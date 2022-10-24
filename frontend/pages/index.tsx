import type { NextPage } from 'next'
import WalletConnectButton from '../components/atoms/WalletConnectButton'
import Erc20TokenListModal from '../components/molecules/Erc20TokenListModal'
import NFTListModal from '../components/molecules/NFTListModal'

const Home: NextPage = () => {
  return (
    <div>
      <WalletConnectButton />
      <Erc20TokenListModal />
      <NFTListModal />
    </div>
  )
}

export default Home
