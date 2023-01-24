import React from 'react'

import BasicPages from 'src/components/common/basic-pages'
import { LandingCarousel } from './carousel/index'
import config from 'src/styles/config'

import { page_2, page_3, page_4 } from './content-pages/pages'
import { MainPageRender } from './main-page'
import { PhotoColectionRender } from './photo-colection'
import { Container } from './styles'

const colors = config.theme.colors

export const Landing: React.FC = () => {

  return (
    <Container>
      <MainPageRender />
      <BasicPages page_config={page_2}/>
      <BasicPages page_config={page_3}/>
      <BasicPages page_config={page_4}/>
      <PhotoColectionRender />
      <LandingCarousel color={colors.base.background.color_1}/>
    </Container>
  )
}
