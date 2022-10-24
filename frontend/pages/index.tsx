import type { NextPage } from 'next'
import WalletConnectButton from '../components/atoms/WalletConnectButton'
import Erc20TokenCurveChart from '../components/molecules/Erc20TokenCurveChart'
import Erc20TokenListModal from '../components/molecules/Erc20TokenListModal'
import NFTListModal from '../components/molecules/NFTListModal'

const Home: NextPage = () => {
  return (
    <div>
      <WalletConnectButton />
      <Erc20TokenListModal />
      <NFTListModal />

      {/* 自分のアドレスと、みたいトークンアドレスをいれるとチャート表示 */}
      <Erc20TokenCurveChart ownerAddr={undefined} tokenAddr={undefined} />
    </div>
  )
}

export default Home
