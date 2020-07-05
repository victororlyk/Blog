import { ReactNode, FC } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Loader from '@components/ui/Loader'
import { useSelector } from 'react-redux'
import { getLoading } from '@store/blog/selectors'
import Navigation from './Navigation'

const Container = styled.div<{ isLoading: boolean }>`
  font-family: Georgia, serif;
  min-height: 100vh;
`

const Content = styled.div`
  margin-bottom: 60px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  position: fixed;
  padding: 10px 10px 0 10px;
  bottom: 0;
  width: 100%;
  height: 40px;
`

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC<Props> = ({ children, title = 'This is the default title' }) => {
  const isLoading = useSelector(getLoading)
  const display = () => (isLoading ? <Loader /> : children)

  return (
    <Container isLoading={isLoading}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Content>
        <Navigation />
        {display()}
      </Content>
      <Footer> Viktor Orlyk 2020</Footer>
    </Container>
  )
}

export default Layout
