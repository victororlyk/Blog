import { put, call } from 'redux-saga/effects'
import axios from '@api/index'
import { getBlogsSuccess, getBlogsFailure, createBlogFailure, createBlogSuccess } from './actions'

export function* getBlogs() {
  try {
    const response = yield call(axios.get, '/')
    yield put(getBlogsSuccess(response.data))
  } catch (e) {
    yield put(getBlogsFailure(e))
  }
}

export function* createBlog(body: any) {
  try {
    yield call(() =>
      axios('/', {
        method: 'post',
        data: body.payload,
      })
    )
    yield put(createBlogSuccess('blog was created'))
  } catch (e) {
    yield put(createBlogFailure('some error occured while creating blog'))
  }
}
