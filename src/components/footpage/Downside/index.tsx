import React from 'react'
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from 'src/assets/images/footpage/Logo.svg'

import {
  DownSide,
  Icons,
  RightContent,
} from './styles'

export const DownsideRender: React.FC = () => {
  return (
    <>
      <DownSide>
        <Link to='/'>
          <img src={logo}></img>
        </Link>
        <RightContent>
          <Icons>
            <FaWhatsapp color='white'/>
            <FaLinkedin color='white'/>
            <FaInstagram color='white'/>
          </Icons>
          <p>© Eliana Pita. Todos os direitos reservados</p>
        </RightContent>
      </DownSide>
    </>
  )
}
