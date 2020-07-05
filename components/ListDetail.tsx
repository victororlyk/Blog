import { FC } from 'react'
import { BlogType } from '@typeDefs/index'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 5%;
  margin-left: 50%;
  transform: translateX(-50%);
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem;
`

type ListDetailProps = {
  blog: BlogType
}

const ListDetail: FC<ListDetailProps> = ({ blog }) => {
  return (
    <Container>
      <Title>Detail for {blog.title}</Title>
      <p>{blog.body}</p>
    </Container>
  )
}

export default ListDetail
