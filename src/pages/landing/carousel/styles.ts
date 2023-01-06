import styled from 'styled-components'
import config from 'src/styles/config'

const layouts = config.screens.sizes
const colors = config.theme.colors

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: ${layouts.dt_lg};
  height: 40rem;
  border-radius: 2rem;
  background: ${colors.base.blue.shade_1};
  box-shadow: 0 10rem 10rem rgba(0, 0, 0, 0.08);
`

export const CarouselBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(${layouts.dt_lg} - 5rem);
  height: 38rem;

  .react-carousel {
    flex: 1 1 auto;
  }

  .carousel .slide img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 2.5rem;
  }

  .carousel {
    height: 100%;
  }

  .carousel .control-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
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
  margin-top: 1rem;
  width: calc(${layouts.dt_lg} - 5rem);
  height: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.others.white};
  padding: 0 5rem;

  & > p {
    font-size: 2rem;
    text-align: justify;
  }
`

export const ReactCarouselTestimonyUser = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8rem;

  & > div {
    width: 3rem;
  }

  h1 {
    font-size: 2.6rem;
  }
`
