import { combineReducers } from 'redux'
import BlogReducer from './blog/reducer'

export const rootReducer = combineReducers({
  BlogReducer,
})

export type RootState = ReturnType<typeof rootReducer>
