import { FC } from 'react'
import { BlogType } from '@typeDefs/index'

type ListDetailProps = {
  blog: BlogType
}

const ListDetail: FC<ListDetailProps> = ({ blog }) => {
  return (
    <div>
      <h1>Detail for {blog.title}</h1>
      <p>ID: {blog.id}</p>
      <p>{blog.body}</p>
      <p>{blog?.date}</p>
    </div>
  )
}

export default ListDetail
