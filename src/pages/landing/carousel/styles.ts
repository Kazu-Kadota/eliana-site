import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 144rem;
  height: 40rem;
  border-radius: 2rem;
  background: #2F4269;
  box-shadow: 0 10rem 10rem rgba(0, 0, 0, 0.08);
`

export const CarouselBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 135rem;
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
    background: #EEE;
  }

  .carousel .control-dots .dot.selected {
    background: #BC4E27;
    height: 1.3rem;
    width: 1.3rem;
  }
`

export const ReactCarouselContainer = styled.div`
  margin-top: 1rem;
  width: 135rem;
  height: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  padding: 0 5rem;

  & > p {
    font-size: 2rem;
    text-align: justify;
  }
`

export const ReactCarouselTestimonyUser = styled.div`
  margin-top: 5rem;
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
