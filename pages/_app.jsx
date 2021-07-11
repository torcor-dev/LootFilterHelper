import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import FilterProvider from '../utils/filterState'

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </Provider>
  )
}

export default App
