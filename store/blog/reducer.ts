import { GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from '@store/blog/actionTypes'
import { BlogActionTypes, BlogReducerTypes } from '@typeDefs/store/blog/blog'


const initialState: BlogReducerTypes = {
  blogs: [],
  error: null,
}

export default (state = initialState, action: BlogActionTypes): BlogReducerTypes => {
  switch (action.type) {
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: [...action.payload],
      }
    case GET_BLOGS_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
