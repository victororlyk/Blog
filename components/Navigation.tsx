import { FC } from 'react'
import Link from 'next/link'

const Navigation: FC<any> = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts/new">
          <a>Create Post</a>
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
