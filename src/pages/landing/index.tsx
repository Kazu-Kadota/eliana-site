import React from 'react'

import config from 'src/styles/config'
import BasicPages from 'src/components/common/basic_pages'

import { Carousel } from './carousel'
import { page_2, page_3, page_4 } from './content_pages/pages'
import { MainPageRender } from './main_page'
import { PhotoColectionRender } from './photo_colection'
import {
  Container,
  FooterPage,
} from './styles'

const colors = config.theme.colors

export const Landing = () => {

  return (
    <Container>
      <MainPageRender />
      <BasicPages page_config={page_2}/>
      <BasicPages page_config={page_3}/>
      <BasicPages page_config={page_4}/>
      <PhotoColectionRender />

      {/* <FooterPage color={colors.base.background.color_1}>
        <Carousel />
      </FooterPage> */}

    </Container>
  )
}
