import axios from 'axios'

export default axios.create({
  baseURL: 'https://simple-blog-api.crew.red/posts',
  headers: {
    post: {
      'content-type': 'application/json',
    },
  },
})
