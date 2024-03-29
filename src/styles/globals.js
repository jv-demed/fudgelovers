import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    height: 100vh;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .container{
    padding-left: 130px;
    padding-right: 130px;
  }
  .section{
    padding-top: 20px;
    padding-bottom: 40px;
  }
  @media(max-width: 850px){
    .container{
      padding-left: 65px;
      padding-right: 65px;
    }
  }
  @media(max-width: 650px){
    .container{
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`

export default GlobalStyle;