import React from 'react'

import BasicPages from 'src/components/common/basic-pages'

import contents from './content'
import FirstAboutMePage from './first-page'
import { Container } from './styles'

const AboutMePage: React.FC = () => {
  return (
  <Container>
    <FirstAboutMePage />
    {contents.map((content) => (
      <BasicPages key={content.image} page_config={content} />
    ))}
  </Container>
  )
}

export default AboutMePage
