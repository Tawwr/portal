import algoliasearch from 'algoliasearch/lite'
import axios from 'axios'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { InstantSearch } from 'react-instantsearch-hooks-web'
import { Provider } from 'react-redux'
import store from 'store'
import 'styles/globals.scss'
import { SWRConfig } from 'swr'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_APP_API_KEY!
)

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
      

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#9196A1" />
      </Head>
      <Provider store={store}>
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher,
          }}
        >
          <InstantSearch
            searchClient={searchClient}
            indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_ID || ''}
          >
            <Component {...pageProps} />
          </InstantSearch>
        </SWRConfig>
      </Provider>
    </>
  )
}

export default MyApp
