import React from 'react'

export type BlogType = {
  id: string
  title: string
  body: string
}

export type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
