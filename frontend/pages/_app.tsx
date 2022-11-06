import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { chakraTheme } from '../utils/theme'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const activeChainId = +process.env.NEXT_PUBLIC_CHAIN_ID!

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider theme={chakraTheme}>
        <Grid
          gridTemplateColumns="100%"
          gridTemplateRows="auto 1fr auto"
          minHeight="100vh"
        >
          <Header />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Grid>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
