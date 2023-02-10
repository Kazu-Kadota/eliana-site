import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

import logo from 'public/assets/images/footpage/logo.svg'

import {
  DownSide,
  Icons,
  RightContent,
} from './styles'


const DownsideRender: React.FC = () => {
  return (
    <>
      <DownSide>
        <Link href='/'>
          <Image src={logo} alt=''/>
        </Link>
        <RightContent>
          <Icons>
            <a href="https://wa.me/5511976628899" target="_blank" rel="noreferrer noopener">
              <FaWhatsapp color='white'/>
            </a>
            <a href="https://www.linkedin.com/in/elianapita/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin color='white'/>
            </a>
            <a href="https://www.instagram.com/elianapitaa/" target="_blank" rel="noreferrer noopener">
              <FaInstagram color='white'/>
            </a>
          </Icons>
          <p>© Eliana Pita. Todos os direitos reservados</p>
        </RightContent>
      </DownSide>
    </>
  )
}

export default DownsideRender
