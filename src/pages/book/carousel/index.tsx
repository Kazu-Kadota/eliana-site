import React from 'react'

import { Carousel } from 'src/components/common/carousel/index'

import testimonies from './content'

type Color = {
  color: string
}

export const BookCarousel: React.FC<Color> = ({color}) => {
  return (
    <>
      <Carousel color={color} testimonies={testimonies}/>
    </>
  )
}
