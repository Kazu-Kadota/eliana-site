import React from 'react'

import BasicPages from 'src/components/common/basic_pages'

import { Carousel } from './carousel'
import { page_2, page_3, page_4 } from './content_pages/pages'
import { MainPageRender } from './main_page'
import { PhotoColectionRender } from './photo_colection'
import {
  Container,
} from './styles'

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
