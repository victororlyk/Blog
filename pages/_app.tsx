import { FC } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '@store/store'
import GlobalStyles from '@utils/reset'

const theme = {
  primary: '#0D0F0F',
}

const App: FC<any> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
