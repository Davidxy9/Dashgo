import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <SiderbarDrawerProvider>
    <Component {...pageProps} />
    </SiderbarDrawerProvider>
  </ChakraProvider>
  )
}

export default MyApp
