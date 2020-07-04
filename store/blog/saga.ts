import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { getBlogsSuccess, getBlogsFailure } from './actions'

export function* getBlogs() {
  try {
    const response = yield call(axios.get, 'https://simple-blog-api.crew.red/posts')
    yield put(getBlogsSuccess(response.data))
  } catch (e) {
    yield put(getBlogsFailure(e))
  }
}
