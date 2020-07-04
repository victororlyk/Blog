import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '@store/blog/actions'
import { getBlogsSelector } from '@store/blog/selectors'
import Layout from '@components/Layout'
import List from '@components/List'

const HomePage: FC = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(getBlogsSelector)

  useEffect(() => {
    dispatch(getBlogs())
  }, [])

  return (
    <Layout title="Latest posts">
      <h1>Latest blog posts</h1>
      <List blogs={blogs} />
    </Layout>
  )
}
// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: Blog[] = sampleUserData
//   return { props: { items } }
// }

export default HomePage
