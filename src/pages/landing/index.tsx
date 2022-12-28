import React from 'react'

import { Container, Content, MainPage, Pages, Box } from './styles'
import photo_1 from 'src/assets/images/landing/Photo_1.png'


export const Landing = () => {
  return (
    <Container>
      <MainPage>
        <img src={photo_1} alt="" />
        <Box>
          <Content>
            <h1>O impulso que a sua carreira e sua equipe precisam</h1>
          </Content>
          <Content>
            <h3>Veja como acelerar sua carreira e de sua equipe e atingir resultados mais rápido.</h3>
          </Content>
          <Content>
            <button>
              <h3>Quero decolar</h3>
            </button>
          </Content>
        </Box>
      </MainPage>
      <Pages>
        <h1>texto</h1>
      </Pages>
    </Container>
  )
}
