import type { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { chakraTheme } from '../utils/theme'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const activeChainId = +process.env.NEXT_PUBLIC_CHAIN_ID!

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.pathname
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider theme={chakraTheme}>
        <Grid
          gridTemplateColumns="100%"
          gridTemplateRows="auto 1fr auto"
          minHeight="100vh"
        >
          {path.includes('enbed') ? (
            <Component {...pageProps} />
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </Grid>
      </ChakraProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
