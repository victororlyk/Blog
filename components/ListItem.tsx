import React from 'react'
import Link from 'next/link'
import { Blog } from 'typeDefs'

type Props = {
  data: Blog
}

const ListItem = ({ data }: Props) => (
  <Link href="/posts/[id]" as={`/posts/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
)

export default ListItem
