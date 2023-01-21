import React from 'react'
import { Post } from '../../components/Post';
import "./PostSection.scss"; 


export const PostSection = ({postsInfo}) => {
  return (
    <section className='post-section'>
      <div className="inner-post-section">
        {postsInfo.map((post,index) => <div className="post" key={index}><Post postInfo={post}/></div>)}
      </div>
    </section>
    
  )
}
