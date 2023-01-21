import { useState } from 'react';
import './App.css'
import GlobalStyles from './Global.styles'
import { Navbar } from './layout/Navbar';
import { PostSection } from './layout/PostSection';

function App() {
  const [isLtr,setIsLtr]=useState(true)
  let changeDirectionHandler = ()=>{
    setIsLtr(!isLtr);
  } 
  let postsInfoEn=[
    {lang:"En",
    creatorImgSrc:"/PostCreatorImg/user11.jpg",
    creatorImgAlt:"Post Creator",
    creatorName:"Ahmad Alabed",
    creationDate:"19:33",
    content:
    <>
          Javascript is a programming language that was initially designed to interact with elements of web pages. Javascript in web browsers consists of three main parts{" "} 
          <a href="https://www.javascripttutorial.net/what-is-javascript/" target="_blank">javascripttutorial</a>{" "} 
    </>
    ,
    postImgSrc:"/PostImages/post-01.jpg",
    postImgAlt:"Post Image"},
    {lang:"En",
    creatorImgSrc:"/PostCreatorImg/user22.jpg",
    creatorImgAlt:"Post Creator",
    creatorName:"Ali Ali",
    creationDate:"19:33",
    content:
    <>
          Javascript is a programming language that was initially designed to interact with elements of web pages. Javascript in web browsers consists of three main parts{" "} 
          <a href="https://www.javascripttutorial.net/what-is-javascript/" target="_blank">javascripttutorial</a>{" "} 
    </>
    
    ,
    postImgSrc:"/PostImages/post-02.jpg",
    postImgAlt:"Post Image"},
    {lang:"En",
    creatorImgSrc:"/PostCreatorImg/user33.jpg",
    creatorImgAlt:"Post Creator",
    creatorName:"Nasser Jaber",
    creationDate:"19:33",
    content:
    <>
          Javascript is a programming language that was initially designed to interact with elements of web pages. Javascript in web browsers consists of three main parts{" "} 
          <a href="https://www.javascripttutorial.net/what-is-javascript/" target="_blank">javascripttutorial</a>{" "} 
    </>
    ,
    postImgSrc:"/PostImages/post-03.jpg",
    postImgAlt:"Post Image"}
  ];
  let postsInfoAr=[
    {lang:"Ar",
    creatorImgSrc:"/PostCreatorImg/user11.jpg",
    creatorImgAlt:"Post Creator",
    creatorName:"أحمد العابد",
    creationDate:"19:33",
    content:
    <>
          جافاسكريبت هي لغة برمجة مصممة في البداية للتفاعل مع عناصر صفحات الويب. تتكون جافاسكريبت في متصفحات الويب من ثلاثة أجزاء رئيسية{" "} 
          <a href="https://www.javascripttutorial.net/what-is-javascript/" target="_blank">javascripttutorial</a>{" "} 
    </>
    ,
    postImgSrc:"/PostImages/post-01.jpg",
    postImgAlt:"Post Image"},
    {lang:"Ar",
    creatorImgSrc:"/PostCreatorImg/user22.jpg",
    creatorImgAlt:"Post Creator",
    creatorName:"علي علي",
    creationDate:"19:33",
    content:
    <>
          جافاسكريبت هي لغة برمجة مصممة في البداية للتفاعل مع عناصر صفحات الويب. تتكون جافاسكريبت في متصفحات الويب من ثلاثة أجزاء رئيسية{" "} 
          <a href="https://www.javascripttutorial.net/what-is-javascript/" target="_blank">javascripttutorial</a>{" "} 
    </>
    
    ,
    postImgSrc:"/PostImages/post-02.jpg",
    postImgAlt:"Post Image"},
    {lang:"Ar",
    creatorImgSrc:"/PostCreatorImg/user33.jpg",
    creatorImgAlt:"Post Creator",
    creatorName:"ناصر جابر",
    creationDate:"19:33",
    content:
    <>
          جافاسكريبت هي لغة برمجة مصممة في البداية للتفاعل مع عناصر صفحات الويب. تتكون جافاسكريبت في متصفحات الويب من ثلاثة أجزاء رئيسية{" "} 
          <a href="https://www.javascripttutorial.net/what-is-javascript/" target="_blank">javascripttutorial</a>{" "} 
    </>
    ,
    postImgSrc:"/PostImages/post-03.jpg",
    postImgAlt:"Post Image"}
  ];
  return (
    <div>
      <GlobalStyles direction={isLtr}/>
      <Navbar changeDirection ={changeDirectionHandler}/>
      {isLtr?<PostSection postsInfo={postsInfoEn}/>:<PostSection postsInfo={postsInfoAr}/>}
      
    </div>
  )
}

export default App
