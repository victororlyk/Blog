import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getBlogById, getBlogErrorsSelector } from '@store/blog/selectors'
import Layout from '@components/Layout'
import ListDetail from '@components/ListDetail'
import { RootState } from '@store/rootReducer'

const Blog = () => {
  const router = useRouter()
  const blog = useSelector((state: RootState) => getBlogById(state, router.query.id))
  const blogErrors = useSelector((state: RootState) => getBlogErrorsSelector(state))

  if (blogErrors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {JSON.stringify(blogErrors)}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${blog ? blog.title : 'Blog Detail'}`}>
      {blog && <ListDetail blog={blog} />}
    </Layout>
  )
}

export default Blog
