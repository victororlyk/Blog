import {
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  CREATE_POST,
  CREATE_POST_FAILURE,
  CREATE_POST_SUCCESS,
  CLEAR_CREATE_TOAST_TEXT,
} from '@store/blog/actionTypes'
import { BlogActionTypes, BlogReducerTypes } from '@typeDefs/store/blog/blog'

const initialState: BlogReducerTypes = {
  blogs: [],
  error: null,
  loading: true,
  createBlog: '',
}

export default (state = initialState, action: BlogActionTypes): BlogReducerTypes => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        loading: true,
      }
    case CREATE_POST:
      return {
        ...state,
        loading: true,
      }
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: [...action.payload],
        loading: false,
      }
    case GET_BLOGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        createBlog: action.payload,
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        createBlog: action.payload,
      }
    case CLEAR_CREATE_TOAST_TEXT:
      return {
        ...state,
        createBlog: '',
      }
    default:
      return state
  }
}
