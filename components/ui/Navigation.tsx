import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #000000;
  color: #ffffff;
  height: 5vh;
  padding: 0 5vw;
`

const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  a {
    margin-left: 20px;
    color: #ffffff;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`

const Navigation: FC = () => {
  return (
    <Header>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts/new">
          <a>Create Post</a>
        </Link>
      </Nav>
    </Header>
  )
}

export default Navigation
