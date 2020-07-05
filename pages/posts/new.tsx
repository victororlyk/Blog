import React, { FC, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '@store/blog/actions'
import Layout from '@components/Layout'

type reducerTypes = {
  title: string
  body: string
  id: string
}

type actionsType = {
  [key: string]: string
}

function reducer(state: reducerTypes, action: actionsType): reducerTypes {
  switch (action.type) {
    case 'title':
      return {
        ...state,
        title: action.payload,
      }
    case 'body':
      return {
        ...state,
        body: action.payload,
      }
    default:
      return state
  }
}

const initialArgs = {
  title: '',
  body: '',
  id: '',
}

const NewPost: FC = () => {
  const [{ title, body }, dispatch] = useReducer(reducer, initialArgs)
  const dispatchRedux = useDispatch()

  const handleSubmit = () => {
    dispatch({ type: 'title', payload: '' })
    dispatch({ type: 'body', payload: '' })
    dispatchRedux(createBlog({ title, body, id: Date.now().toString() }))
  }

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }

  return (
    <Layout>
      <h1> Create new post</h1>
      <div>
        <input type="text" name="title" onChange={handleTextChange} value={title} />
        <textarea name="body" cols={30} rows={10} onChange={handleTextChange} value={body} />
        <button type="button" disabled={!title || !body} onClick={handleSubmit}>
          Create Post
        </button>
      </div>
    </Layout>
  )
}
export default NewPost
