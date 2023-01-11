import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import config from 'src/styles/config'

import testimonies from './content'
import {
  CarouselBackground,
  CarouselContainer,
  Container,
  ReactCarouselContainer,
  SpaceContainer,
} from './styles'

const colors = config.theme.colors

export const Carousel = () => {
  return (
    <>
      <SpaceContainer color={colors.base.background.color_1}/>
      <CarouselContainer color={colors.base.background.color_1}>
        <Container>
          <CarouselBackground>
            <ReactCarousel
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
                  <h1>{testimony.name} {testimony.last_name}</h1>
                </ReactCarouselContainer>
              ))}
            </ReactCarousel>
          </CarouselBackground>
        </Container>
      </CarouselContainer>
      <SpaceContainer color={colors.base.background.color_1}/>
    </>

  )
}
