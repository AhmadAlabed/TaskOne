import React from 'react'
import "./Post.scss";
import { PostContent } from '../../shared/PostContent'
import { PostCreatorImage } from '../../shared/PostCreatorImage/index'
import { PostCreatorName } from '../../shared/PostCreatorName'
import { PostDate } from '../../shared/PostDate'
import { PostIcon } from '../../shared/PostIcon'
import { PostImage } from '../../shared/PostImage'
import { PostTranslation } from '../../shared/PostTranslation'
import {SlLike} from 'react-icons/sl'
import {FaRegCommentAlt} from "react-icons/fa"
import {RiShareForwardLine} from "react-icons/ri"
import {BiWorld} from "react-icons/bi"
import {FiMoreHorizontal} from "react-icons/fi"
export const Post = ({postInfo}) => {
  return (
            <>
                <div className="post-creator">
                    <div className="post-creator-image">
                        <PostCreatorImage creatorImgSrc={postInfo.creatorImgSrc} creatorImgAlt={postInfo.creatorImgAlt}/>
                    </div>
                    <div className="post-creator-name">
                        <PostCreatorName creatorName={postInfo.creatorName}/>
                        <div className='date-audience'>{postInfo.lang==="En"?<PostDate creationDate={"Today at " + postInfo.creationDate} />:<PostDate creationDate={"اليوم الساعة "  + postInfo.creationDate} />}<BiWorld/></div>
                    </div>
                    <div className="more"><FiMoreHorizontal/></div>
                </div>
                <div className="post-content">
                    <PostContent content={postInfo.content}/>
                </div>
                <div className="post-translation">
                {postInfo.lang==="En"?<PostTranslation href={"https://google.com"} target="_blank" text ={"See translation"}/>:<PostTranslation href={"https://google.com"} target="_blank" text ={"شاهد الترجمة"}/>}
                </div>
                <div className="post-image">
                    <PostImage postImgSrc={postInfo.postImgSrc} postImgAlt={postInfo.postImgAlt}/>
                </div>
                <div className="post-icons">
                    {postInfo.lang==="En"?
                    <>
                        <PostIcon icon={<SlLike />} text={"like"}/>
                        <PostIcon icon={<FaRegCommentAlt />} text={"comment"}/>
                        <PostIcon icon={<RiShareForwardLine />} text={"share"}/>
                    </>:
                    <>
                        <PostIcon icon={<SlLike />} text={"أعجبني"}/>
                        <PostIcon icon={<FaRegCommentAlt />} text={"تعليق"}/>
                        <PostIcon icon={<RiShareForwardLine />} text={"مشاركة"}/>
                    </>
                }
                    
                </div>
            </>
  )
}
