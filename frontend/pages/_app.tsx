import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { chakraTheme } from '../utils/theme'
import { ChakraProvider } from '@chakra-ui/react'

const activeChainId = +process.env.NEXT_PUBLIC_CHAIN_ID!

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp