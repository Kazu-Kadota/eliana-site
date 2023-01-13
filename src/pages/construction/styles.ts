import styled from 'styled-components'

import DefaultBackground from 'src/assets/images/background/default.svg'
import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens
const variables = config.var

export const Container = styled.div`
  position: relative;
  background-image: url(${DefaultBackground});
  height: 100%;
  width: 100%;
`

export const Wrapper = styled.div`
  position: relative;
  top: ${variables.header_height};
  padding-bottom: ${variables.header_height};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (${screens.min_sizes.dt_sm}) {
    height: calc(100vh - ${variables.header_height});
    padding-bottom: ${variables.header_height};
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ContentImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 50vw;

  @media (${screens.min_sizes.sp_lg}) {
    max-width: 50vw;
  }

  @media (${screens.min_sizes.dt_sm}) {
    max-width: 50vw;
  }

  & > img {
    position: block;
    width: 100%;
    transform: rotate(90deg);

    @media (${screens.min_sizes.dt_sm}) {
      height: 100%;
    }

    @media (${screens.min_sizes.dt_sm}) {
      display: block;
      height: 100%;
      max-width: 100%;
      width: auto;
      top: 0;
      float: right;
      transform: rotate(0deg);
      object-fit: cover;
      object-position: 10% 30%;
    }

    @media (${screens.min_sizes.dt_lg}) {
    }
  }
`

export const ContentText = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  @media (${screens.min_sizes.sp_sm}) {
    max-width: 100%;
    max-height: 50vh;
  }

  @media (${screens.min_sizes.dt_sm}) {
    margin: 10rem 0;
    max-width: 50vw;
    max-height: 100%;
  }

  & > h1 {
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-size: ${font_sizes.sp.xl};
    color: ${colors.base.blue.shade_1};
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xxl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xxl};
    }
  }

  & > p {
    padding: 0 1rem;
    font-size: ${font_sizes.sp.lg};
    color: ${colors.base.blue.shade_1};
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.sm};
    }
  }
`
