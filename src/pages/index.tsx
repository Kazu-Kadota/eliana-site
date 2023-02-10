import Head from 'next/head'
import React, { Fragment } from 'react'

import BasicPages from '@/components/common/basic-pages'
import LandingCarousel from '@/components/landing/carousel'
import MainPageRender from '@/components/landing/main-page'
import PhotoColectionRender from '@/components/landing/photo-colection'
import { page_2, page_3, page_4 } from '@/contents/landing/content-pages/pages'
import config from '@/styles/config'

import Container from './styles'

const colors = config.theme.colors

const Landing = () => {

  return (
    <Fragment>
      <Head>
        <title>Eliana Pita</title>
        <meta name='description' content='Página de apresentação da Eliana Pita - Landing Page'/>
      </Head>
      <Container>
        <MainPageRender />
        <BasicPages page_config={page_2}/>
        <BasicPages page_config={page_3}/>
        <BasicPages page_config={page_4}/>
        <PhotoColectionRender />
        <LandingCarousel color={colors.base.background.color_1}/>
      </Container>
    </Fragment>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Landing
