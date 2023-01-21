import { createGlobalStyle } from "styled-components";
export default  createGlobalStyle`
:root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    direction:${props => props.direction ? "ltr" : "rtl"};
    
  }
  * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0 ; 
  padding: 0;
  list-style: none;
  text-decoration: none; 
}
`