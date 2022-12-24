import styled from 'styled-components'
import photo_1 from '../../assets/images/landing/Photo_1_With_Blur.png'

export const Container = styled.section`
  position: relative;
  max-width: 1440px;
  height: 100vh;
  top: 64px;
  display: block;
  border: 1px solid red;
`

export const Content = styled.div`
  h1 {
    color: #000000;
    position: absolute;
    font-size: 5vw;
    left: 15vh;
    top: 40vh;
    height: 30vh;
    width: 80vh;
  }
`

export const Picture = styled.picture`
  /* width: 1440px;
  height: 960px; */

  img {
    max-width: 100%;
    height: 960px;
    object-fit: cover;
    object-position: bottom;
  }
`

// export const Image = styled.img`
//   position: absolute;
//   width: 1440px;
//   height: 960px;
//   background-image: url(${photo_1});
//   background-repeat: no-repeat;
//   background-size: 100% auto;
// `
