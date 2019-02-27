import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:200,300');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');

  html {
    font-size: 12pt;
  }

  * {
    box-sizing: border-box !important;
  }

  body {
    background-color: ${({ theme }) => theme.colours.background};
    color: ${({ theme }) => theme.colours.textPrimary};

    transition: ${({ theme: { transitionDuration } }) => `color ${transitionDuration}, background-color ${transitionDuration}`};

    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
