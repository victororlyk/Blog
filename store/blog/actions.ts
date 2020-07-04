import { GET_BLOGS, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from './actionTypes'

export const getBlogs = () => {
  return {
    type: GET_BLOGS,
  }
}

export const getBlogsSuccess = (blogs: any) => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: blogs,
  }
}

export const getBlogsFailure = (error: any) => {
  return {
    type: GET_BLOGS_FAILURE,
    payload: error,
  }
}
