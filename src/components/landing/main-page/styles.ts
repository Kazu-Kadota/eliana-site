import styled from 'styled-components'

import config from '@/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens
const variable = config.var

export const MainPage = styled.div`
  position: relative;
  width: 100%;
  min-height: 50rem;
  height: calc(100vh - ${variable.header_height});
  display: flex;
  justify-content: center;
  margin-top: ${variable.header_height};

  & > img {
    position: absolute;
    width: 100%;
    min-height: 50rem;
    height: calc(100vh - ${variable.header_height});
    object-fit: cover;
    object-position: 50% 0%;
    filter: blur(0.3rem);
    opacity: 0.9;
    -webkit-filter: blur(0.3rem);
  }
`

export const MainBox = styled.div`
  max-width: 50rem;
  width: 75vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${screens.min_sizes.dt_sm}) {
    width: 50rem;
    right: 20vw;
  }

  & > h1 {
    margin: 1rem 0;
    color: ${colors.others.white};
    font-size: ${font_sizes.sp.xxl};
    text-shadow: -1rem 1rem 1.5rem rgba(0, 0, 0, 0.7);
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.dt.lg};
      text-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.7);
      text-align: left;
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xxl};
      text-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.7);
      text-align: left;
    }
  }

  & > h3 {
    margin: 1.5rem 0;
    color: ${colors.others.white};
    font-weight: 500;
    font-size: ${font_sizes.sp.lg};
    text-shadow: -1rem 1rem 1.5rem rgba(0, 0, 0, 0.7);

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.dt.md};
      text-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.7);
      text-align: left;
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.md};
      text-shadow: -1.5rem 1.5rem 2rem rgba(0, 0, 0, 0.7);
    }
  }

  & > a {
    width: 100%;
  }

  & > a > button {
    margin: 1rem 0;
    background: ${colors.secondary.yellow.shade_1};
    width: 100%;
    height: 6rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;

    @media (${screens.min_sizes.dt_sm}) {
      height: 8rem;
    }
  }

  & > a > button:hover {
    background: ${colors.base.blue.shade_1};
    box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
    transform: translateY(-1rem);
  }

  & > a > button > h3 {
    font-size: ${font_sizes.sp.lg};
    font-weight: 700;

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.md};
    }
  }

  & > a > button:hover > h3 {
    color: ${colors.others.lightGray};
  }
`
