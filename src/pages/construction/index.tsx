import React from 'react'

import coffee from 'src/assets/images/construction/coffee-vertical.png'

import { Container, ContentImage, ContentText, Wrapper } from './styles'

const InConstructionPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ContentText>
          <h1>Página em construção</h1>
          <p>Fique antenada(o) nas próximas novidades!</p>
          <p>Por enquanto, vai um café?</p>
        </ContentText>
        <ContentImage>
          <img src={coffee} />
        </ContentImage>
      </Wrapper>
    </Container>
  )
}

export default InConstructionPage
