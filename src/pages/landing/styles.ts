import styled from 'styled-components'
import * as colors from 'src/styles/colors'

const header_height = '6.5rem'
const footer_height = '40vh'

export const Container = styled.section`
  position: relative;
`

export const MainPage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${header_height};
  width: 100%;
  height: calc(100vh - ${header_height});

  & > img {
    position: absolute;
    width: 100%;
    height: calc(100vh - ${header_height});
    object-fit: cover;
    object-position: 20% 0%;
    filter: blur(0.3rem);
    -webkit-filter: blur(00.3rem);
  }

  @media screen and (max-width: 97rem) {
    & > div {
      margin: 16rem 0;
      right: 0;
    }
  }
`

export const MainBox = styled.div`
  width: 50rem;
  box-sizing: content-box;
  height: auto;
  position: relative;
  display: flex;
  margin: 18rem 0;
  right: 50rem;
  flex-direction: column;
  justify-content: space-around;
`

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    color: ${colors.white};
  }

  & > h3 {
    color: ${colors.white};
    font-weight: 500;
  }

  & > button {
    background: ${colors.secondaryYellowShade1};
    width: 48rem;
    height: 8rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;
  }

  & > button:hover {
    background: ${colors.baseBlueShade1};
    box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
    transform: translateY(-1rem);
  }

  & > button:hover > h3 {
    color: ${colors.lightGray};
  }

  & > button > h3 {
    font-weight: 700;
  }
`

export const Pages = styled.div`
  background-color: ${props => props.color};

  & > div {
    width: 100%;
    height: calc(100vh - ${header_height});
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  & > div > img {
    height: 70vh;
    width: auto;
    object-fit: cover;
    object-position: 50% 40%;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 1.0rem .2rem rgba(0, 0, 0, 0.3);
  }
`

export const Box = styled.div`
  width: 80rem;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: ${colors.baseBlueShade1};
    text-align: right;
  }

  & > h3 {
    text-align: center;
  }

  & > a {
    display: block;
    font-size: 3.2rem;
    color: ${colors.secondaryOrangeShade1}
  }

  & > button {
    background: ${colors.secondaryYellowShade1};
    width: 48rem;
    height: 8rem;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;
  }

  & > button:hover {
    background: ${colors.secondaryOrangeShade3};
    box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
    transform: translateY(-1rem);
  }

  & > button > h3 {
    font-weight: 700;
  }
`

export const PhotoColection = styled.div`
  width: 80rem;
  height: 70vh;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: ${colors.baseBlueShade1}
  }

  & > a {
    font-size: 2.6rem;
    font-weight: 500;
    color: ${colors.baseBlueShade1}
  }

  & > div {
    padding: 8rem 0 5rem 0;
    width: 75vw;
    display: flex;
    justify-content: space-around;
  }
`

export const ContentBlock = styled.div`
  width: 75vw;
  height: auto;
  top: 50vh;
  justify-content: space-around;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  &:hover > div {
    top: 23vh;
  }
`

export const ImagesBlock = styled.img`
  width: 25vw;
  height: 25vw;
  filter: brightness(60%);
  object-fit: cover;
  object-position: 50% 40%;
  box-shadow: 0.5rem 0.5rem 1.0rem .2rem rgba(0, 0, 0, 0.3);
`

export const TextBlock = styled.div`
  position: absolute;
  padding-left: 2vw;
  bottom: 33vh;

  & > h2 {
    color: ${colors.white};
    width: 17vw;
    padding-right: 7rem;
  }
`

export const FooterPage = styled.div`
  height: calc(100vh - ${header_height} - ${footer_height});
  background-color: ${props => props.color};

  & > h1 {
    padding-top: 3vh;
    text-align: center;
    color: ${colors.baseBlueShade1}
  }
`

export const SwipeBackground = styled.div`
  width: 95vw;
  height: 40vh;
  margin: 0 auto;
  margin-top: 3vh;
`

export const SwipeContainer = styled.div`
  max-width: 130rem;
  min-height: 30vh;
  margin: auto;
  background: ${colors.baseBlueShade1};
  border-radius: 2rem;
`

export const SwipeContent = styled.div`
  max-width: 114rem;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  background: ${colors.white};
  border-radius: 2rem;

  & > div > p {
    font-size: 2.1rem;
  }

  & > div > h3 {
    font-size: 2.6rem;
    font-weight: bold;
    text-align: center;
  }
`
