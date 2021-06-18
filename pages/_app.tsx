import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component title="Sooraj's Portfolio" {...pageProps} />
}
export default MyApp
