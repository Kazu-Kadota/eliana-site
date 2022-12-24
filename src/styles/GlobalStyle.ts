import styled, { createGlobalStyle } from 'styled-components'
import DMSansRegularTTF from '../assets/fonts/DM/DMSans-Regular.ttf'
import DMSansMediumTTF from '../assets/fonts/DM/DMSans-Medium.ttf'
import DMSansBoldTTF from '../assets/fonts/DM/DMSans-Bold.ttf'
import DMSansItalicTTF from '../assets/fonts/DM/DMSans-Italic.ttf'
import DMSansMediumItalicTTF from '../assets/fonts/DM/DMSans-MediumItalic.ttf'
import DMSansBoldItalicTTF from '../assets/fonts/DM/DMSans-BoldItalic.ttf'
import * as colors from './colors'

export default createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0px;
    box-sizing: border-box;
    font-weight: inherit;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    text-rendering: optimizelegibility;
    text-size-adjust: 100%;
  }

  @font-face {
      font-family: 'DM Sans';
      src: url(${DMSansRegularTTF}) format('truetype');
    }

  @font-face {
    font-family: 'DM Sans Medium';
    src: url(${DMSansMediumTTF}) format('truetype');
  }

  @font-face {
    font-family: 'DM Sans Bold';
    src: url(${DMSansBoldTTF}) format('truetype');
  }

  @font-face {
    font-family: 'DM Sans Italic';
    src: url(${DMSansItalicTTF}) format('truetype'),;
  }

  @font-face {
    font-family: 'DM Sans Medium Italic';
    src: url(${DMSansMediumItalicTTF}) format('truetype');
  }

  @font-face {
    font-family: 'DM Sans Bold Italic';
    src: url(${DMSansBoldItalicTTF}) format('truetype');
  }

  body {
    font-family: 'DM Sans';
    font-size: 24px
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  h1 {
    display: block;
    font-family: 'DM Sans Bold';
    color: #FFFFFF;
    font-size: 2em;
    margin-block-end: 0.67em;
    margin-block-start: 0.67em;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
  }

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`
