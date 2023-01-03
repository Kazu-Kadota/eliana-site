import React from 'react'

import { Aside, Container, HeaderList, HeaderListSublist, HeaderDropDown, Nav, Ul } from './styles'
import logo from 'src/assets/images/header/eliana-pita-consultoria.svg'

export const Header = () => {
  return (
    <Aside>
      <Container>
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <Nav>
          <Ul>
            <HeaderList><a href="#">Sobre mim</a></HeaderList>
            <HeaderList><a href="#">Contato</a></HeaderList>
            <HeaderList><a href="#">Livro</a></HeaderList>
            <HeaderListSublist>
              <span>Para Pessoas</span>
              <HeaderDropDown>
                <ul>
                  <li><a href="#">Cursos</a></li>
                  <li><a href="#">Mentorias</a></li>
                </ul>
              </HeaderDropDown>
            </HeaderListSublist>
            <HeaderListSublist>
              <span>Para Empresas</span>
              <HeaderDropDown>
                <ul>
                  <li><a href="#">Palestras e treinamentos</a></li>
                  <li><a href="#">Consultoria</a></li>
                </ul>
              </HeaderDropDown>
            </HeaderListSublist>
          </Ul>
        </Nav>
      </Container>
    </Aside>
  )
}
