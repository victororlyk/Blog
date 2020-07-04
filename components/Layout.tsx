import { ReactNode, FC } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    {children}
    <footer>
      <span>Footer</span>
    </footer>
  </div>
)

export default Layout
