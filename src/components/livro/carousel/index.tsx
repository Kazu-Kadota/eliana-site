import React from 'react'

import Carousel from '@/components/common/carousel/index'
import testimonies from '@/contents/livro/carousel/content'

type Color = {
  color: string
}

const BookCarousel: React.FC<Color> = ({color}) => {
  return (
    <>
      <Carousel color={color} testimonies={testimonies}/>
    </>
  )
}

export default BookCarousel
