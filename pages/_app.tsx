import axios from 'axios'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { SWRConfig } from 'swr'
import 'styles/globals.css'

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  )
}

export default MyApp
