import Head from 'next/head'
import React, { Fragment } from 'react'

import BasicPages from '@/components/common/basic-pages'
import FirstAboutMePage from '@/components/sobre-mim/first-page'
import contents from '@/contents/sobre-mim/content'

import Container from './styles'

const AboutMePage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Sobre Mim</title>
        <meta name='description' content='Sobre a Eliana Pita'/>
      </Head>
      <Container>
        <FirstAboutMePage />
        {contents.map((content) => (
          <BasicPages key={content.index} page_config={content} />
        ))}
      </Container>
    </Fragment>
  )
}

export default AboutMePage
