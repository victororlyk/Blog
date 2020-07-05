import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { getBlogsSuccess, getBlogsFailure, createBlogFailure, createBlogSuccess } from './actions'

export function* getBlogs() {
  try {
    const response = yield call(axios.get, 'https://simple-blog-api.crew.red/posts')
    yield put(getBlogsSuccess(response.data))
  } catch (e) {
    yield put(getBlogsFailure(e))
  }
}

export function* createBlog(body: any) {
  console.log(body, 'here')
  try {
    yield call(() =>
      axios('https://simple-blog-api.crew.red/posts', {
        method: 'post',
        data: body.payload,
        headers: {
          'content-type': 'application/json',
        },
      })
    )
    yield put(createBlogSuccess('blog was created'))
  } catch (e) {
    yield put(createBlogFailure('some error occured while creating blog'))
  }
}
