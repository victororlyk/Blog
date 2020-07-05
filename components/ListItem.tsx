import { FC } from 'react'
import Link from 'next/link'
import { BlogType } from '@typeDefs/index'

type Props = {
  data: BlogType
}

const ListItem: FC<Props> = ({ data }) => (
  <Link href="/posts/[id]" as={`/posts/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
)

export default ListItem
