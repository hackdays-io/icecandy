import { AssetTransfersCategory, fromHex, toHex } from 'alchemy-sdk'
import { orderBy } from 'lodash'
import { FC, useEffect, useState } from 'react'
import { useAlchemyClient } from '../../hooks/useAlchemy'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Box } from '@chakra-ui/react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type Props = {
  ownerAddr?: string
  tokenAddr?: string
}

const Erc20TokenCurveChart: FC<Props> = ({ ownerAddr, tokenAddr }) => {
  const alchemy = useAlchemyClient()
  const [accumulatedAmount, setAccumulatedAmount] = useState<
    { value: number; block: number }[]
  >([])

  useEffect(() => {
    const fetch = async () => {
      if (ownerAddr && tokenAddr) {
        const receiveTransactions = await alchemy.core.getAssetTransfers({
          category: [AssetTransfersCategory.ERC20],
          contractAddresses: [tokenAddr],
          toAddress: ownerAddr,
        })
        const sendTransactions = await alchemy.core.getAssetTransfers({
          category: [AssetTransfersCategory.ERC20],
          contractAddresses: [tokenAddr],
          fromAddress: ownerAddr,
        })

        const orderedTransactions = orderBy(
          receiveTransactions.transfers.concat(sendTransactions.transfers),
          [
            (transaction) => {
              return fromHex(transaction.blockNum)
            },
          ],
          ['asc']
        )

        const camulative: { value: number; block: number }[] = []

        orderedTransactions.reduce((prev, newVal) => {
          if (newVal.from === ownerAddr) {
            camulative.push({
              value: prev - Number(newVal.value),
              block: fromHex(newVal.blockNum),
            })
            return prev - Number(newVal.value)
          } else {
            camulative.push({
              value: prev + Number(newVal.value),
              block: fromHex(newVal.blockNum),
            })
            return prev + Number(newVal.value)
          }
        }, 0)

        setAccumulatedAmount(camulative)
      }
    }

    fetch()

    return () => {
      fetch()
    }
  }, [])

  return (
    <Box width={500}>
      <Line
        data={{
          labels: accumulatedAmount.map((c) => c.block),
          datasets: [
            {
              data: accumulatedAmount.map((c) => c.value),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0.5,
            },
          ],
        }}
      />
    </Box>
  )
}

export default Erc20TokenCurveChart
