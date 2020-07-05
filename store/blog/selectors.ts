import find from 'lodash/fp/find'
import mapValues from 'lodash/fp/mapValues'
import { RootState } from '../rootReducer'

export const getBlogsSelector = (state: RootState) => state.BlogReducer.blogs

export const getBlogById = (state: RootState, id: any) => {
  const correctBlogs = mapValues((blog) => {
    const newBlog = { ...blog }
    newBlog.id = newBlog.id.toString()
    return newBlog
  }, state.BlogReducer.blogs)
  return find(['id', id], correctBlogs)
}

export const getBlogErrorsSelector = (state: RootState) => state.BlogReducer.error

export const getLoading = (state: RootState) => state.BlogReducer.loading

export const getCrateBlogText = (state: RootState) => state.BlogReducer.createBlog
