import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import black from './fonts/Nunito-Black.ttf';
import extraBold from './fonts/Nunito-ExtraBold.ttf';
import bold from './fonts/Nunito-Bold.ttf';
import semiBold from './fonts/Nunito-SemiBold.ttf';
import regular from './fonts/Nunito-Regular.ttf';
import light from './fonts/Nunito-Light.ttf';
import extraLight from './fonts/Nunito-ExtraLight.ttf';

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${black}) format("truetype");
    font-weight: 900;
  }
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${extraBold}) format("truetype");
    font-weight: 800; 
  }
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${bold}) format("truetype");
    font-weight: 700; 
  }
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${semiBold}) format("truetype");
    font-weight: 600; 
  }
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${regular}) format("truetype");
    font-weight: 500; 
  }
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${light}) format("truetype");
    font-weight: 400; 
  }
  
  @font-face {
    font-family: "Nunito";
    src: local("Nunito"), url(${extraLight}) format("truetype");
    font-weight: 300; 
  }
  
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
  };
`;
