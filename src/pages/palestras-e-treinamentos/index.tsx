import Head from 'next/head'
import React, { Fragment } from 'react'

import InConstructionPage from '@/components/construction'

import Container from './styles'

const MentoringPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Palestras e Treinamentos</title>
        <meta name='description' content='Mentoria com Eliana Pita'/>
      </Head>
      <InConstructionPage/>
    </Fragment>
  )
}

export default MentoringPage
