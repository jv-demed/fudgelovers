import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/globals.js';
import Typography from '../src/styles/typography.js';
import theme from '../src/styles/theme.js';
import Head from 'next/head';
import Header from '../src/components/Header/Header.js';
import { logos } from '../src/data/images';
import '../src/styles/fonts.css';

export default function App({ Component, pageProps }){
  return(
    <>
      <Head>
        <title>Fudge Lovers</title>
        <link rel='icon' href={logos.favicon} type='image/x-icon'/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Typography />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}