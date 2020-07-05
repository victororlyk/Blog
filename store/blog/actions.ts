import { AxiosError } from 'axios'
import { BlogType } from '@typeDefs/index'
import {
  getBlogsAction,
  getBlogsSuccessAction,
  getBlogsFailureAction,
  createBlogAction,
  createBlogSuccessAction,
  createBlogFailureAction,
  clearBlogCreateToastAction,
} from '@typeDefs/store/blog/blog'
import {
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  CLEAR_CREATE_TOAST_TEXT,
} from './actionTypes'

export const getBlogs = (): getBlogsAction => ({
  type: GET_BLOGS,
})

export const getBlogsSuccess = (blogs: BlogType[]): getBlogsSuccessAction => ({
  type: GET_BLOGS_SUCCESS,
  payload: blogs,
})

export const getBlogsFailure = (error: AxiosError): getBlogsFailureAction => ({
  type: GET_BLOGS_FAILURE,
  payload: error,
})

export const createBlog = (blog: {
  title: string
  body: string
  id: string
}): createBlogAction => ({
  type: CREATE_POST,
  payload: blog,
})

export const createBlogSuccess = (res: string): createBlogSuccessAction => ({
  type: CREATE_POST_SUCCESS,
  payload: res,
})

export const createBlogFailure = (error: string): createBlogFailureAction => ({
  type: CREATE_POST_FAILURE,
  payload: error,
})

export const clearBlogCreateToast = (): clearBlogCreateToastAction => ({
  type: CLEAR_CREATE_TOAST_TEXT,
})
