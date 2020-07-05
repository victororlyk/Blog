import { RootState } from '../rootReducer'

export const getBlogsSelector = (state: RootState) => state.BlogReducer.blogs
export const getBlogById = (state: RootState, id: any) =>
  state.BlogReducer.blogs.find((blog) => blog.id.toString() === id)
export const getBlogErrorsSelector = (state: RootState) => state.BlogReducer.error
