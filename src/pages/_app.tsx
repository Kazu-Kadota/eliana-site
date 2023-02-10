import { ThemeProvider } from '@mui/material'
import Head from 'next/head'
import { Fragment } from 'react'

import Footerpage from '@/components/footpage'
import Header from '@/components/heading'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/mui-global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footerpage />
      </ThemeProvider>
    </Fragment>
  )
}
