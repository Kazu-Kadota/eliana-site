import Head from 'next/head'
import React, { Fragment } from 'react'

import InConstructionPage from '@/components/construction'

import Container from './styles'

const MentoringPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Consultoria</title>
        <meta name='description' content='Consultoria da Eliana Pita'/>
      </Head>
      <InConstructionPage/>
    </Fragment>
  )
}

export default MentoringPage
