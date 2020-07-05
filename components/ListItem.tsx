import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { BlogType } from '@typeDefs/index'

const Card = styled.a`
  text-decoration: none;
  cursor: pointer;
  h2 {
    font-size: 2.2rem;
    margin: 1rem;
    white-space: normal;
    word-break: break-all;
  }
  p {
    color: #738a94;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 1rem;
  }
`

type Props = {
  data: BlogType
}

const ListItem: FC<Props> = ({ data }) => (
  <Link href="/posts/[id]" as={`/posts/${data?.id}`}>
    <Card>
      <h2>{data.title}</h2>
      <p>{data?.body}</p>
    </Card>
  </Link>
)

export default ListItem
