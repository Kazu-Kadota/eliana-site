import React from 'react'
import {
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa'

import { ContactType } from 'src/types/contact-me'
import Instagram from 'src/assets/icons/colorful-instagram.png'
import contactImage from 'src/assets/images/contact-me/contact.png'

import { ContactWrapper, Container, Image, RowContent, SocialContent } from './styles'

const contact: ContactType[] = [
  {
    Icon: FaWhatsapp,
    content: '(11)97662-8899',
    color: '#2BB741',
    link: 'https://wa.me/5511976628899',
  },
  {
    Icon: FaLinkedin,
    content: '/elianapita',
    color: '#0e76a8',
    link: 'https://www.linkedin.com/in/elianapita',
  },
  {
    Icon: Instagram,
    content: '/elianapitaa',
    link: 'https://www.instagram.com/elianapitaa',
  },
]

const iconSize = '5rem'

const TalkToMe: React.FC = () => {
  const socialContent = () => {
    const content = contact.map((social) => {
      const { content, Icon, color, link } = social

      if (typeof Icon === 'string') {
        return (
          <RowContent key={content}>
            <a href={link} target="_blank" rel="noreferrer noopener">
              <Image src={Icon} sizes={iconSize} className='image'/>
            </a>
            <p>{content}</p>
          </RowContent>
        )
      }

      return (
        <RowContent key={content}>
          <a href={link} target="_blank" rel="noreferrer noopener">
            <Icon size={iconSize} color={color} className='image'/>
          </a>
          <p>{content}</p>
        </RowContent>
      )
    })

    return content
  }

  return (
    <Container>
      <ContactWrapper>
        <p>Fale comigo!</p>
        <SocialContent>
          {socialContent()}
        </SocialContent>
      </ContactWrapper>
      <img src={contactImage} />
    </Container>
  )
}

export default TalkToMe
