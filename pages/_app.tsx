import { FC } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '@store/store'

const theme = {
  primary: 'black',
}

const App: FC<any> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
