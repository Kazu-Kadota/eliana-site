import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import testimonies from './content'
import {
  CarouselBackground,
  Container,
  ReactCarouselContainer,
  ReactCarouselTestimonyUser
} from './styles'

export const Carousel = () => {
  return (
  <Container>
    <CarouselBackground>
      <ReactCarousel
        className='react-carousel'
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        swipeable={true}
        infiniteLoop={true}
      >
        {testimonies.map((testimony) => (
          <ReactCarouselContainer key={testimony.index}>
            <p>{testimony.message}</p>
            <ReactCarouselTestimonyUser>
              <img src={testimony.image} />
              <div />
              <h1>{testimony.name} {testimony.last_name}</h1>
            </ReactCarouselTestimonyUser>
          </ReactCarouselContainer>
        ))}
      </ReactCarousel>
    </CarouselBackground>
  </Container>
  )
}
