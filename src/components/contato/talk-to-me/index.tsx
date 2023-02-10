import Image from 'next/image'
import React from 'react'
import {
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa'

import Instagram from 'public/assets/icons/colorful-instagram.png'
import contactImage from 'public/assets/images/contact-me/contact.png'

import { ContactWrapper, Container, StyledImage, RowContent, SocialContent } from './styles'

const iconSize = '5rem'

const TalkToMe: React.FC = () => {
  return (
    <Container>
      <ContactWrapper>
        <p>Fale comigo!</p>
        <SocialContent>
          <RowContent>
            <a href='https://wa.me/5511976628899' target="_blank" rel="noreferrer noopener">
              {/* <Image src={Icon} alt='' /> */}
              <FaWhatsapp size={iconSize} color='#2BB741' className='image'/>
            </a>
            <p>(11)97662-8899</p>
          </RowContent>
          <RowContent>
            <a href='https://www.linkedin.com/in/elianapita' target="_blank" rel="noreferrer noopener">
              {/* <Image src={Icon} alt='' /> */}
              <FaLinkedin size={iconSize} color='#0e76a8' className='image'/>
            </a>
            <p>/elianapita</p>
          </RowContent>
          <RowContent>
            <a href='https://www.instagram.com/elianapitaa' target="_blank" rel="noreferrer noopener">
              <StyledImage src={Instagram} sizes={iconSize} className='image' alt=''/>
            </a>
            <p>/elianapitaa</p>
          </RowContent>
        </SocialContent>
      </ContactWrapper>
      <Image src={contactImage} alt='' priority={true}/>
    </Container>
  )
}

export default TalkToMe
