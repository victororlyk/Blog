import { takeEvery } from 'redux-saga/effects'
import { getBlogs } from './blog/saga'
import { GET_BLOGS } from './blog/actionTypes'

export function* rootSaga() {
  yield takeEvery(GET_BLOGS, getBlogs)
}
