import React from 'react'
import { PostTranslationStyle } from './PostTranslation.styles'


export const PostTranslation = ({href , target , text}) => {
  return (
    <PostTranslationStyle href={href} target={target} >{text}</PostTranslationStyle>
  )
}
