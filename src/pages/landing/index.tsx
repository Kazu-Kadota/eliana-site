import React from 'react'

import BasicPages from 'src/components/common/basic-pages'

import { Carousel } from './carousel'
import { page_2, page_3, page_4 } from './content-pages/pages'
import { MainPageRender } from './main-page'
import { PhotoColectionRender } from './photo-colection'
import { Container } from './styles'

export const Landing: React.FC = () => {

  return (
    <Container>
      <MainPageRender />
      <BasicPages page_config={page_2}/>
      <BasicPages page_config={page_3}/>
      <BasicPages page_config={page_4}/>
      <PhotoColectionRender />
      <Carousel />
    </Container>
  )
}
