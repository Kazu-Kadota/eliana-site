import React from 'react'

import { Aside, Container, Nav } from './styles'
import logo from 'src/assets/images/header/eliana-pita-consultoria.svg'

export const Header = () => {
  return (
    <Aside>
      <Container>
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <Nav>
          <ul>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Livro</a></li>
            <li><a href="#">Para Pessoas</a></li>
            <li><a href="#">Para Empresas</a></li>
          </ul>
        </Nav>
      </Container>
    </Aside>
  )
}
