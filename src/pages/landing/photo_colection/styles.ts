import styled from 'styled-components'
import config from 'src/styles/config'

const colors = config.theme.colors
const variable = config.var
const screens = config.screens

export const Pages = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${variable.header_height});
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
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
    color: ${colors.base.blue.shade_1}
  }

  & > a {
    font-size: 2.6rem;
    font-weight: 500;
    color: ${colors.base.blue.shade_1}
  }
`

export const PhotoWrapper = styled.div`
  padding: 8rem 0 5rem 0;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${screens.min_sizes.dt_sm}) {
    flex-direction: row;
  }
`

export const ContentBlock = styled.div`
  width: 75vw;
  height: auto;
  top: 50vh;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
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

export const TextBlock = styled.h2`
  position: absolute;
  padding-left: 2vw;
  margin-top: -20rem;
  color: ${colors.others.white};
  width: 17vw;
  padding-right: 7rem;
`
