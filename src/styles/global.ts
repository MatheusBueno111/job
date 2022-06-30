import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
    
  }
  body, input, button, footer{
    font-size: 16px;
    font-family: 'Robot', 'sans-serif' ;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background: #3C415C;
  }

  ul {
    list-style: none;
  }
`