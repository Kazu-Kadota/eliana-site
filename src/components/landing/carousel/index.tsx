import React from 'react'

import Carousel from '@/components/common/carousel/index'
import testimonies from '@/contents/landing/carousel/content'

type Color = {
  color: string
}

const LandingCarousel: React.FC<Color> = ({color}) => {
  return (
    <>
      <Carousel color={color} testimonies={testimonies}/>
    </>
  )
}

export default LandingCarousel
