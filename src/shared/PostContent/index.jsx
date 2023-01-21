import React from 'react'
import { PostContentStyle } from './PostContent.styles'


export const PostContent = ({content}) => {
  return (
    <PostContentStyle>{content}</PostContentStyle>
  )
}