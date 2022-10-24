import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Erc20TokenCurveChart from '../components/molecules/Erc20TokenCurveChart'
import Erc20TokenListModal from '../components/molecules/Erc20TokenListModal'
import NFTListModal from '../components/molecules/NFTListModal'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/profile/new">
        <Button>プロフィール作成ページ</Button>
      </Link>

      <Erc20TokenListModal />
      <NFTListModal />

      {/* 自分のアドレスと、みたいトークンアドレスをいれるとチャート表示 */}
      <Erc20TokenCurveChart ownerAddr={undefined} tokenAddr={undefined} />
    </div>
  )
}

export default Home
