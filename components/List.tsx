import { FC } from 'react'
import { BlogType } from '@typeDefs/index'
import ListItem from './ListItem'

type Props = {
  blogs: BlogType[]
}

const List: FC<Props> = ({ blogs }) => (
  <ul>
    {blogs.map((blog) => (
      <li key={blog.id}>
        <ListItem data={blog} />
      </li>
    ))}
  </ul>
)

export default List
