import React from 'react'
import { PostCreatorNameStyle } from './PostCreatorName.styles'

export const PostCreatorName = ({creatorName}) => {
  return (
    <PostCreatorNameStyle>{creatorName}</PostCreatorNameStyle>
  )
}
