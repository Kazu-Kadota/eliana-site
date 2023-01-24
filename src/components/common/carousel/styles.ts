import styled from 'styled-components'
import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens

const carouselDesktopMinHeightSize = '35rem'

export const SpaceContainer = styled.div`
  height: 2rem;
  background-color: ${props => props.color};

  @media (${screens.min_sizes.dt_sm}) {
    height: 5rem;
  }
`

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-width: calc(${screens.sizes.sp_sm} - 10rem);
  max-width: calc(${screens.sizes.sp_sm} + 20rem);
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: ${colors.base.blue.shade_1};
  box-shadow: 0 10rem 10rem rgba(0, 0, 0, 0.08);
  margin: 0 5rem;

  @media (${screens.min_sizes.dt_sm}) {
    min-height: ${carouselDesktopMinHeightSize};
    max-width: calc(${screens.sizes.dt_sm} + 30rem);
  }
`

export const CarouselBackground = styled.div`
  display: flex;
  flex-direction: column;
  min-width: calc(${screens.sizes.sp_sm} - 10rem);
  max-width: calc(${screens.sizes.sp_sm} + 50rem);
  width: 100%;
  height: 100%;

  @media (${screens.min_sizes.dt_sm}) {
    min-height: ${carouselDesktopMinHeightSize};
    min-width: calc(${screens.sizes.dt_sm} - 10rem);
    max-width: calc(${screens.sizes.dt_sm} + 50rem);
  }

  .carousel-root {
    padding: 2rem;
    padding-bottom: 0;
    flex: 1 1 auto;
  }

  .carousel {
    height: 100%;
    margin-bottom: 3.5rem;
  }

  .carousel .control-dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel .control-dots .dot {
    background: ${colors.others.lightGray};
  }

  .carousel .control-dots .dot.selected {
    background: ${colors.secondary.orange.shade_1};
    height: 1.3rem;
    width: 1.3rem;
  }
`

export const ReactCarouselContainer = styled.div`
  max-width: calc(${screens.sizes.sp_sm} + 50rem);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${colors.others.white};
  padding: 1rem 2.5rem;

  @media (${screens.min_sizes.dt_sm}) {
    min-height: ${carouselDesktopMinHeightSize};
    min-width: calc(${screens.sizes.dt_sm} - 20rem);
    max-width: calc(${screens.sizes.dt_sm} + 40rem);
    padding: 0 5rem;
  }

  & > p {
    margin: 2rem 0;
    font-size: ${font_sizes.sp.md};
    text-align: justify;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.lg};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xs};
    }
  }

  & > h1 {
    margin: 2rem 0;
    font-size: ${font_sizes.sp.lg};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.sm};
    }
  }
`

export const StarsContainer = styled.div`
  & > h1 {
    margin: 2rem 0;
    font-size: ${font_sizes.sp.lg};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.sm};
    }
  }
`

export const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.others.white};

  @media (${screens.min_sizes.dt_sm}) {
    min-height: 1rem;
  }
`
