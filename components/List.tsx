import { FC } from 'react'
import styled from 'styled-components'
import { BlogType } from '@typeDefs/index'
import ListItem from './ListItem'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5vw;
`

const FirstBlog = styled.div`
  width: 100%;
  margin: 40px 10px 0;
  display: flex;
`

const Card = styled.li`
  margin: 10px;
  width: 30%;
  text-decoration: none;
  border-radius: 5px;
  padding: 5px;
`

const MainCard = styled(Card)`
  width: 33%;
  margin: 0;
  padding: 0;
`

const ImageMainWrapper = styled.div`
  width: 66%;
  margin: 0;
  padding: 0;
`

const BreakLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: lightgrey;
  margin: 40px 10px;
`

const ImageListWrapper = styled.div`
  margin: 0;
  padding: 10px;
`

const IMG = styled.img`
  width: 100%;
`

type Props = {
  blogs: BlogType[]
}

const List: FC<Props> = ({ blogs }) => (
  <StyledList>
    <FirstBlog>
      <ImageMainWrapper>
        <IMG src="/public.jpg" />
      </ImageMainWrapper>
      <MainCard key={blogs[0].id}>
        <ListItem data={blogs[0]} />
      </MainCard>
    </FirstBlog>
    <BreakLine />
    {blogs?.map((blog, index) => {
      if (index === 0) return
      return (
        <Card key={blog.id}>
          <ImageListWrapper>
            <IMG src="/public.jpg" />
          </ImageListWrapper>
          <ListItem data={blog} />
        </Card>
      )
    })}
  </StyledList>
)

export default List
