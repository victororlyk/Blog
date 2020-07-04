import { FC } from 'react'
import { Provider } from 'react-redux'
import store from '@store/store'

const App: FC<any> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
