import React from 'react'

import photo_main_page from 'src/assets/images/landing/Photo_Main_Page.png'
import config from 'src/styles/config'
import basicPages from 'src/components/basic_pages'

import { Carousel } from './carousel'
import {
  Container,
  MainPage,
  Pages,
  MainBox,
  PhotoColection,
  ContentBlock,
  ImagesBlock,
  TextBlock,
  FooterPage,
} from './styles'
import { page_2, page_3, page_4 } from './content_pages/pages'
import { photo_colection_content } from './content_pages/photo_colection'

const colors = config.theme.colors

export const Landing = () => {

  return (
    <Container>
      <MainPage>
        <img src={photo_main_page} />
        <MainBox>
            <h1>O impulso que a sua carreira e sua equipe precisam</h1>
            <h3>Veja como acelerar sua carreira e de sua equipe e atingir
              resultados mais rápido.
            </h3>
            <button>
              <h3>Quero decolar</h3>
            </button>
        </MainBox>
      </MainPage>

      {basicPages(page_2)}

      {basicPages(page_3)}

      {basicPages(page_4)}

      <Pages color={colors.base.background.color_2}>
        <div>
          <PhotoColection>
            <h1>Como eu te impulsiono</h1>
            <div>
              {photo_colection_content.map((block) => (
                <ContentBlock key={block.image}>
                  <ImagesBlock src={block.image} />
                  <TextBlock>{block.content}</TextBlock>
                </ContentBlock>
              ))}
            </div>
            <a href="#">Quero conhecer todas as formas de me impulsionar</a>
          </PhotoColection>
        </div>
      </Pages>

      <FooterPage color={colors.base.background.color_1}>
        <Carousel />
      </FooterPage>

    </Container>
  )
}
