import React from 'react'
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

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
        <img src={logo}></img>
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
