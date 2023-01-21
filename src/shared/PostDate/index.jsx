import React from 'react'
import { PostDateStyle } from './PostDate.styles'


export const PostDate = ({creationDate}) => {
  return (
    <PostDateStyle>{creationDate}</PostDateStyle>
  )
}
