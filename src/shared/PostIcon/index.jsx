import React from 'react'
import { PostIconStyle } from './PostIcon.styles'


export const PostIcon = ({icon , text}) => {
  return (
    <PostIconStyle>
      {icon}
      <p>{text}</p>
    </PostIconStyle>
  )
}
