import React from 'react'
import { PostImageStyle } from './PostImage.styles'


export const PostImage = ({postImgSrc , postImgAlt}) => {
  return (
    <PostImageStyle src={postImgSrc} alt={postImgAlt} />
  )
}
