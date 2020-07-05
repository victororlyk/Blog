import { takeEvery } from 'redux-saga/effects'
import { getBlogs, createBlog } from './blog/saga'
import { GET_BLOGS, CREATE_POST } from './blog/actionTypes'

export function* rootSaga() {
  yield takeEvery(GET_BLOGS, getBlogs)
  yield takeEvery(CREATE_POST, createBlog)
}
