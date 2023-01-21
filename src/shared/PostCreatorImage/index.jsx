import React from 'react'
import { PostCreatorImageStyle } from './PostCreatorImage.styles'

export const PostCreatorImage = ({creatorImgSrc ,creatorImgAlt }) => {
  return (
    <>
      <PostCreatorImageStyle src={creatorImgSrc} alt={creatorImgSrc}/>
    </>
    
  )
}
