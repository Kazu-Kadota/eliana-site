import React from 'react'

import ebookImage from 'src/assets/images/contact_me/ebook.png'

import {
  Container,
  EbookContainer,
  EbookForms,
} from './styles'

const Ebook: React.FC = () => {
  return (
    <Container>
      <EbookContainer>
        <h1>Ganhe um book</h1>
        <h2>Preencha os campos abaixo</h2>
        <EbookForms action="">
          <label htmlFor="name" />
          <input type="text" id="name" name="name" placeholder="Nome" />

          <label htmlFor="email" />
          <input type="text" id="email" name="email" placeholder="E-mail" />

          <input type="submit" value="Ganhar ebook!"></input>
        </EbookForms>
      </EbookContainer>
      <img src={ebookImage} />
    </Container>
  )
}

export default Ebook
