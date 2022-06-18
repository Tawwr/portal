import algoliasearch from 'algoliasearch/lite'
import axios from 'axios'
import type { AppProps } from 'next/app'
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
  )
}

export default MyApp
