import React from 'react'
import Ebook from './ebook'

import { Container } from './styles'
import TalkToMe from './talk-to-me'


const ContactMe: React.FC = () => {
  return (
  <Container>
    <TalkToMe />
    <Ebook />
  </Container>
  )
}

export default ContactMe
