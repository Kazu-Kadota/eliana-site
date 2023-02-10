import Image from 'next/image'
import React from 'react'

import config from '@/styles/config'
import mainPhoto from 'public/assets/images/about-me/main-page.png'

import { Container, Wrapper } from './styles'

const colors = config.theme.colors

const FirstAboutMePage: React.FC = () => {
  return (
  <Container color={colors.base.background.color_1}>
    <Wrapper>
      <h1>Olá, seja bem-vinda (o) por aqui!</h1>
      <p>Eu sou Eliana Pita, tenho formação em Recursos Humanos e mestrado em liderança, sou Master Coach, Consultora, Escritora, Palestrante e Especialista em Desenvolvimento Humano. Também sou criadora do Método LEV e autora do livro “Como dizer? A arte de dar e receber Feedback”.</p>
    </Wrapper>
    <Image src={mainPhoto} alt='' priority={true}/>
  </Container>
  )
}

export default FirstAboutMePage
