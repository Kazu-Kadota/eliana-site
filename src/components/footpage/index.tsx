import React from 'react'

import instagram_icon from 'src/assets/images/footpage/instagram-white.png'
import linkedin_icon from 'src/assets/images/footpage/linkedin-white.png'
import logo from 'src/assets/images/footpage/Logo.svg'
import whatsapp_icon from 'src/assets/images/footpage/whatsapp-white.png'

import {
  ColumnContent,
  Container,
  DownSide,
  Icons,
  Upside
} from './styles'

export const Footerpage = () => {
  return (
    <Container>

      <Upside>
        <ColumnContent>
          <h4>Eliana Pita</h4>
          <a href='#'>Sobre mim</a>
          <a href='#'>Livro</a>
        </ColumnContent>
        <ColumnContent>
          <h4>Fale comigo</h4>
          <a href='#'>Contato</a>
        </ColumnContent>
        <ColumnContent>
          <h4>Para Pessoas</h4>
          <a href='#'>Cursos</a>
          <a href='#'>Mentorias</a>
        </ColumnContent>
        <ColumnContent>
          <h4>Para Empresas</h4>
          <a href='#'>Palestras e treinamentos</a>
          <a href='#'>Consultoria</a>
        </ColumnContent>
      </Upside>

      <DownSide>
        <img src={logo}></img>
        <Icons>
          <img src={whatsapp_icon} />
          <img src={linkedin_icon} />
          <img src={instagram_icon} />
        </Icons>
      </DownSide>
    </Container>
  )
}
