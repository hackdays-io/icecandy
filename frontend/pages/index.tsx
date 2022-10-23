import type { NextPage } from 'next'
import WalletConnectButton from '../components/atoms/WalletConnectButton'
import Erc20TokenListModal from '../components/molecules/Erc20TokenListModal'

const Home: NextPage = () => {
  return (
    <div>
      <WalletConnectButton />
      <Erc20TokenListModal />
    </div>
  )
}

export default Home
