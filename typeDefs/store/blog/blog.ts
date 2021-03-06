import { AxiosError } from 'axios'
import {
  CREATE_POST,
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  GET_BLOGS,
  GET_BLOGS_FAILURE,
  GET_BLOGS_SUCCESS,
  CLEAR_CREATE_TOAST_TEXT,
} from '@store/blog/actionTypes'

import { BlogType } from '@typeDefs/index'

// actions
export interface getBlogsAction {
  type: typeof GET_BLOGS
}

export interface getBlogsSuccessAction {
  type: typeof GET_BLOGS_SUCCESS
  payload: BlogType[]
}

export interface getBlogsFailureAction {
  type: typeof GET_BLOGS_FAILURE
  payload: AxiosError
}

export interface createBlogAction {
  type: typeof CREATE_POST
  payload: { title: string; body: string; id: string }
}

export interface createBlogFailureAction {
  type: typeof CREATE_POST_FAILURE
  payload: string
}

export interface createBlogSuccessAction {
  type: typeof CREATE_POST_SUCCESS
  payload: string
}
export interface clearBlogCreateToastAction {
  type: typeof CLEAR_CREATE_TOAST_TEXT
}

export type BlogActionTypes =
  | getBlogsSuccessAction
  | getBlogsFailureAction
  | getBlogsAction
  | createBlogAction
  | createBlogSuccessAction
  | createBlogFailureAction
  | clearBlogCreateToastAction

// reducer
export type BlogReducerTypes = {
  blogs: BlogType[]
  error: null | any
  loading: boolean
  createBlog: string
}
