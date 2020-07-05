import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getBlogs } from '@store/blog/actions'
import { getBlogsSelector } from '@store/blog/selectors'
import Layout from '@components/ui/Layout'
import List from '@components/List'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem;
`

const HomePage: FC = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(getBlogsSelector)

  useEffect(() => {
    dispatch(getBlogs())
  }, [])

  return (
    <Layout title="Latest posts">
      <Container>
        <Title>Latest blog posts</Title>
        <List blogs={blogs} />
      </Container>
    </Layout>
  )
}

export default HomePage
