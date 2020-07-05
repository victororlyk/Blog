import React, { useEffect, FC, useReducer } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { createBlog, clearBlogCreateToast } from '@store/blog/actions'
import { getCrateBlogText, getLoading, getBlogsSelector } from '@store/blog/selectors'
import Layout from '@components/ui/Layout'
import Toast from '@components/ui/Toast'
import { InputEvent } from '@typeDefs/index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  * {
    margin-bottom: 10px;
  }
`

const TextInput = styled.input`
  max-width: 60%;
  padding: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  outline: none;
  font: inherit;
  &:hover {
    border: 2px solid #4c4c4c;
  }
`

const Label = styled.label`
  font-size: 1rem;
`

const TextArea = styled.textarea`
  width: 80%;
  height: 200px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  outline: none;
  font: inherit;
  padding: 20px;
  &:hover {
    border: 2px solid #4c4c4c;
  }
`

const Button = styled.button`
  width: 300px;
  height: 50px;
  align-self: center;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 10px;
  line-height: 50px;
  font-size: 1rem;
  text-transform: uppercase;
  &:not([disabled]):hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
  &:disabled {
    background-color: #3c3c3c;
    color: #d6d6d6;
  }
`

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
  const toastText = useSelector(getCrateBlogText)
  const isLoading = useSelector(getLoading)
  const blogs = useSelector(getBlogsSelector)
  const router = useRouter()

  useEffect(() => {
    if (toastText) {
      setTimeout(() => {
        dispatchRedux(clearBlogCreateToast())
      }, 2000)
    }
    if (isLoading && !toastText && !blogs.length) {
      router.push('/')
    }
  }, [toastText, isLoading])

  const handleSubmit = () => {
    dispatch({ type: 'title', payload: '' })
    dispatch({ type: 'body', payload: '' })
    dispatchRedux(createBlog({ title, body, id: Date.now().toString() }))
  }

  const handleTextChange = (e: InputEvent) => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }

  return (
    <Layout>
      <Container>
        <Title> Create new post</Title>
        <Form>
          <Label htmlFor="title">Give your blog some title</Label>
          <TextInput
            placeholder="Blog title"
            type="text"
            name="title"
            id="title"
            onChange={handleTextChange}
            value={title}
          />
          <Label htmlFor="body">Your blog</Label>
          <TextArea
            placeholder="Blog body"
            name="body"
            id="body"
            onChange={handleTextChange}
            value={body}
          />
          <Button type="button" disabled={!title || !body} onClick={handleSubmit}>
            Create Post
          </Button>
        </Form>
        <Toast toastText={toastText} />
      </Container>
    </Layout>
  )
}

export default NewPost
