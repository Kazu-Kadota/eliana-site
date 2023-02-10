import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import coffee from 'public/assets/images/construction/coffee-vertical.png'

import { Container, ContentImage, ContentText, Wrapper } from './styles'

const InConstructionPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ContentText>
          <h1>Página em construção</h1>
          <p>Fique antenada(o) nas próximas novidades!</p>
          <p>Por enquanto, vai um café?</p>
          <Link href='/'>Voltar para a página inicial</Link>
        </ContentText>
        <ContentImage>
          <Image src={coffee} alt='' priority={true}/>
        </ContentImage>
      </Wrapper>
    </Container>
  )
}

export default InConstructionPage
