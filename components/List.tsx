import { FC } from 'react'
import styled from 'styled-components'
import { BlogType } from '@typeDefs/index'
import ListItem from './ListItem'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.li`
  margin: 10px;
  width: 30%;
  text-decoration: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 5px;
`

type Props = {
  blogs: BlogType[]
}

const List: FC<Props> = ({ blogs }) => (
  <StyledList>
    {blogs.map((blog) => (
      <Card key={blog.id}>
        <ListItem data={blog} />
      </Card>
    ))}
  </StyledList>
)

export default List
