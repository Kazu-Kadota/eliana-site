import Head from 'next/head'
import React, { Fragment } from 'react'

import Ebook from '@/components/common/ebook'
import TalkToMe from '@/components/contato/talk-to-me'

import Container from './styles'

const ContactMe: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Contato</title>
        <meta name='description' content='Contato da Eliana Pita'/>
      </Head>
      <Container>
        <TalkToMe />
        <Ebook />
      </Container>
    </Fragment>
  )
}

export default ContactMe
