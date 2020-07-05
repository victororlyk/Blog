import { AxiosResponse, AxiosError } from 'axios'
import { BlogType } from '@typeDefs/index'
import {
  getBlogsAction,
  getBlogsSuccessAction,
  getBlogsFailureAction,
  createBlogAction,
  createBlogSuccessAction,
  createBlogFailureAction,
} from '@typeDefs/store/blog/blog'
import {
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from './actionTypes'

export const getBlogs = (): getBlogsAction => {
  return {
    type: GET_BLOGS,
  }
}

export const getBlogsSuccess = (blogs: BlogType[]): getBlogsSuccessAction => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: blogs,
  }
}

export const getBlogsFailure = (error: AxiosError): getBlogsFailureAction => {
  return {
    type: GET_BLOGS_FAILURE,
    payload: error,
  }
}

export const createBlog = (blog: { title: string; body: string; id: string }): createBlogAction => {
  return {
    type: CREATE_POST,
    payload: blog,
  }
}

export const createBlogSuccess = (res: AxiosResponse): createBlogSuccessAction => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: res,
  }
}

export const createBlogFailure = (error: AxiosError): createBlogFailureAction => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  }
}
