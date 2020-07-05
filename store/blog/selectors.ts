import find from 'lodash/fp/find'
import conforms from 'lodash/fp/conforms'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import { RootState } from '../rootReducer'

export const getBlogsSelector = (state: RootState) =>
  filter(conforms({ title: (title: any) => !!title }), state.BlogReducer.blogs)

export const getBlogById = (state: RootState, id: any) => {
  const correctBlogs = map((blog) => {
    blog.id = blog.id.toString()
    return blog
  }, state.BlogReducer.blogs)
  return find(['id', id], correctBlogs)
}

export const getBlogErrorsSelector = (state: RootState) => state.BlogReducer.error

export const getLoading = (state: RootState) => state.BlogReducer.loading

export const getCrateBlogText = (state: RootState) => state.BlogReducer.createBlog
