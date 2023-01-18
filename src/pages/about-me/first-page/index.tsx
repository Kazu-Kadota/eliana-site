import React from 'react'

import mainPhoto from 'src/assets/images/about-me/main-page.png'
import config from 'src/styles/config'

import { Container, Wrapper } from './styles'

const colors = config.theme.colors

const FirstAboutMePage: React.FC = () => {
  return (
  <Container color={colors.base.background.color_1}>
    <Wrapper>
      <h1>Olá, seja bem-vinda (o) por aqui!</h1>
      <p>Eu sou Eliana Pita, tenho formação em Recursos Humanos e mestrado em liderança, sou Master Coach, Consultora, Escritora, Palestrante e Especialista em Desenvolvimento Humano. Também sou criadora do Método LEV e autora do livro “Como dizer? A arte de dar e receber Feedback”.</p>
    </Wrapper>
    <img src={mainPhoto} />
  </Container>
  )
}

export default FirstAboutMePage
