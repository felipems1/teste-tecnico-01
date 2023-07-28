import { createGlobalStyle } from 'styled-components'
import bg from '../assets/bg.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
