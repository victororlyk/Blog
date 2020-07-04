import * as React from 'react'
import ListItem from './ListItem'
import { Blog } from 'typeDefs'

type Props = {
  blogs: Blog[]
}

const List = ({ blogs }: Props) => (
  <ul>
    {blogs.map((blog) => (
      <li key={blog.id}>
        <ListItem data={blog} />
      </li>
    ))}
  </ul>
)

export default List
