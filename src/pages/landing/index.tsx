import React from 'react'

import photo_main_page from 'src/assets/images/landing/Photo_Main_Page.png'
import photo_page_2 from 'src/assets/images/landing/Photo_Page_2.jpeg'
import photo_page_3 from 'src/assets/images/landing/Photo_Page_3.jpeg'
import photo_page_4 from 'src/assets/images/landing/Photo_Page_4.jpeg'
import photo_page_5_1 from 'src/assets/images/landing/Photo_Page_5_1.jpeg'
import photo_page_5_2 from 'src/assets/images/landing/Photo_Page_5_2.jpeg'
import photo_page_5_3 from 'src/assets/images/landing/Photo_Page_5_3.jpeg'
import * as colors from 'src/styles/colors'

import {
  Container,
  MainContent,
  MainPage,
  Pages,
  MainBox,
  Box,
  PhotoColection,
  ContentBlock,
  ImagesBlock,
  TextBlock,
} from './styles'

export const Landing = () => {

  return (
    <Container>
      <MainPage>
        <img src={photo_main_page} />
        <MainBox>
          <MainContent>
            <h1>O impulso que a sua carreira e sua equipe precisam</h1>
          </MainContent>
          <MainContent>
            <h3>Veja como acelerar sua carreira e de sua equipe e atingir
              resultados mais rápido.
            </h3>
          </MainContent>
          <MainContent>
            <button>
              <h3>Quero decolar</h3>
            </button>
          </MainContent>
        </MainBox>
      </MainPage>

      <Pages color={colors.backgroundColor1}>
        <div>
          <Box>
            <h1>+ de 30 anos cuidando de gente</h1>
            <h3>Há mais de 30 anos eu seleciono, contrato, capacito, treino e
              desenvolvo pessoas e pude comprovar a enorme capacidade do ser
              humano, para mudar, desenvolver-se e evoluir, desde que use as
              estratégias certas.
            </h3>
            <a href="#">Saiba mais</a>
          </Box>
          <img src={photo_page_2} />
        </div>
      </Pages>

      <Pages color={colors.backgroundColor2}>
        <div>
          <Box>
            <h1>Diferentes segmentos, diferentes desafios e diferentes soluções.</h1>
            <h3>Varejo, indústria e serviços. Conheça as marcas que já foram
              impulsionadas.
            </h3>
            <a href="#">Saiba mais</a>
          </Box>
          <img src={photo_page_3} />
        </div>
      </Pages>

      <Pages color={colors.backgroundColor1}>
        <div>
          <Box>
            <h1>Como dizer? a arte de dar e receber Feedback</h1>
            <h3>Quer saber como já impactei a vida de mais de 3.000 pessoas,
              ensinando a ferramenta mais efetiva para o desenvolvimento pessoal
              e profissional? (Sugestão de título e texto)
            </h3>
            <button>
              <h3>Saiba mais</h3>
            </button>
          </Box>
          <img src={photo_page_4} />
        </div>
      </Pages>

      <Pages color={colors.backgroundColor2}>
        <div>
          <PhotoColection>
            <h1>Como eu te impulsiono</h1>
            <div>
              <ContentBlock>
                <ImagesBlock src={photo_page_5_1} />
                <TextBlock>
                  <h2>Mentoria de Carreira</h2>
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <ImagesBlock src={photo_page_5_2} />
                <TextBlock>
                  <h2>Palestras e treinamentos</h2>
                </TextBlock>
              </ContentBlock>
              <ContentBlock>
                <ImagesBlock src={photo_page_5_3} />
                <TextBlock>
                  <h2>Cursos online</h2>
                </TextBlock>
              </ContentBlock>
            </div>
            <a href="#">Quero conhecer todas as formas de me impulsionar</a>
          </PhotoColection>
        </div>
      </Pages>

    </Container>
  )
}
