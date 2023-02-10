import React from 'react'

import BasicPages from '@/components/common/basic-pages'
import contents from '@/contents/cursos/find-your-forces/content'

import { Container } from './styles'

const FindYourForces: React.FC = () => {
  return (
  <Container>
    {contents.map((content) => (
      <BasicPages key={content.index} page_config={content} />
    ))}
  </Container>
  )
}

export default FindYourForces
