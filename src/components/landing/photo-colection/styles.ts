import Image from 'next/image'
import styled from 'styled-components'

import config from '@/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens

export const PhotoColection = styled.div`
  position: relative;
  width: calc(100% -10rem);
  max-height: 200vh;
  height: 100%;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.color};

  & > h1 {
    padding-top: 5rem;
    font-size: ${font_sizes.sp.xl};
    color: ${colors.base.blue.shade_1};
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xxl}
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xl}
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.xxl}
    }
  }

  & > a {
    padding-bottom: 5rem;
    font-size: ${font_sizes.sp.md};
    font-weight: 500;
    color: ${colors.base.blue.shade_1};
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.lg};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xs};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.sm};
    }
  }
`

export const PhotoWrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 30rem;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (${screens.min_sizes.dt_sm}) {
    flex-direction: row;
    max-width: 144rem;
  }
`

export const ContentBlock = styled.div`
  flex: 1;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`

export const ImagesBlock = styled(Image)`
  min-width: 20rem;
  width: 100%;
  min-height: 20rem;
  height: 100%;
  aspect-ratio: 1;
  vertical-align: top;
  filter: brightness(60%);
  object-fit: cover;
  object-position: 50% 40%;
  box-shadow: 0.5rem 0.5rem 1.0rem .2rem rgba(0, 0, 0, 0.3);
`

export const TextBlock = styled.h2`
  position: absolute;
  padding-left: 3vw;
  margin-top: -10rem;
  color: ${colors.others.white};
  width: 17vw;
  padding-right: 7rem;
  font-size: ${font_sizes.sp.lg};

  @media (${screens.min_sizes.sp_lg}) {
    margin-top: -12rem;
    font-size: ${font_sizes.sp.xl}
  }

  @media (${screens.min_sizes.dt_sm}) {
    padding-left: 2vw;
    margin-top: -15rem;
    font-size: ${font_sizes.dt.md}
  }

  @media (${screens.min_sizes.dt_lg}) {
    margin-top: -20rem;
    font-size: ${font_sizes.dt.lg}
  }
`
