import styled from 'styled-components'
import * as colors from 'src/styles/colors'

const header_height = '6.5rem'

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

export const Pages = styled.div`
  width: 100%;
  height: calc(100vh - ${header_height});
`

export const Box = styled.div`
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

export const Content = styled.div`
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

  & > button > h3 {
    font-weight: 700;
  }
`
