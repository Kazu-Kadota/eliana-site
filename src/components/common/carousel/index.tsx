import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { FaStar } from 'react-icons/fa'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import { CarouselContent, Testimony } from '@/types/landing/carousel'

import {
  CarouselBackground,
  CarouselContainer,
  Container,
  ReactCarouselContainer,
  SpaceContainer,
  StarsContainer,
  StarsWrapper,
} from './styles'

const Star: JSX.Element = <FaStar color='#ffa41c' size={24}/>

const Carousel: React.FC<CarouselContent> = ({color, testimonies}) => {
  const renderContent = (testimony: Testimony) => {
    if (testimony.stars) {
      let stars: JSX.Element | undefined = undefined
      switch (testimony.stars) {
        case (1):
          stars = Star
          break
        case (2):
          stars = <>{Star}{Star}</>
          break
        case (3):
          stars = <>{Star}{Star}{Star}</>
          break
        case (4):
          stars = <>{Star}{Star}{Star}{Star}</>
          break
        case (5):
          stars = <>{Star}{Star}{Star}{Star}{Star}</>
          break
      }
      return (
        <>
          <p>{testimony.message}</p>
          <StarsContainer>
            <h1>{testimony.name} {testimony.last_name}</h1>
            <StarsWrapper>
              {stars}
            </StarsWrapper>
          </StarsContainer>
        </>
      )
    }

    return (
      <>
        <p>{testimony.message}</p>
        <h1>{testimony.name} {testimony.last_name}</h1>
      </>
    )
  }


  return (
    <>
      <SpaceContainer color={color}/>
      <CarouselContainer color={color}>
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
                  {renderContent(testimony)}
                </ReactCarouselContainer>
              ))}
            </ReactCarousel>
          </CarouselBackground>
        </Container>
      </CarouselContainer>
      <SpaceContainer color={color}/>
    </>
  )
}

export default Carousel
