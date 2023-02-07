import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import BasicPages from 'src/components/common/basic-pages'

import contents from './content'
import FirstAboutMePage from './first-page'
import { Container } from './styles'

const AboutMePage: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Sobre Mim</title>
        <meta name='description' content='Sobre a Eliana Pita'/>
      </Helmet>
      <Container>
        <FirstAboutMePage />
        {contents.map((content) => (
          <BasicPages key={content.image} page_config={content} />
        ))}
      </Container>
    </Fragment>
  )
}

export default AboutMePage
