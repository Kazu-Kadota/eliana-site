import Head from 'next/head'
import React, { Fragment } from 'react'

import BasicPages from '@/components/common/basic-pages'
import Ebook from '@/components/common/ebook'
import contents from '@/contents/livro/content'

import Container from './styles'

const BookPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Livro</title>
        <meta name='description' content='Livros da Eliana Pita'/>
      </Head>
      <Container>
        <Ebook />
        {contents.map((content) => (
          <BasicPages key={content.index} page_config={content} />
        ))}
      </Container>
    </Fragment>
  )
}

export default BookPage
