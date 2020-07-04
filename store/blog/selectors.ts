export const getBlogsSelector = (state: any) => state.BlogReducer.blogs
export const getBlogById = (state: any, id: any) =>
  state.BlogReducer.blogs.find((blog: any) => blog.id.toString() === id)
export const getBlogErrorsSelector = (state: any) => state.BlogReducer.error
