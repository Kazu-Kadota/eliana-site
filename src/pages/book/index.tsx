import React from 'react'
import BasicPages from 'src/components/common/basic_pages'

import Ebook from 'src/components/common/ebook'

import contents from './content'
import { Container } from './styles'

const BookPage: React.FC = () => {
  return (
  <Container>
    <Ebook />
    {contents.map((content) => (
      <BasicPages key={content.image} page_config={content} />
    ))}
  </Container>
  )
}

export default BookPage
