import React from 'react'

import { BasicPage } from 'src/types/basic_page'

import {
  Pages,
  Box,
} from './styles'

interface BasicPageType {
  page_config: BasicPage
}

const BasicPages: React.FC<BasicPageType> = ({page_config}) => {
  const renderPages = (page_config: BasicPage) => {
    if(page_config.variation.a) {
      return (
        <>
          <Box>
            <h1>{page_config.text.h1}</h1>
            <h3>{page_config.text.h3}</h3>
            <a href={page_config.variation.a}>Saiba mais</a>
          </Box>
          <img src={page_config.image} />
        </>
      )
    } else if (page_config.variation.button) {
      return (
        <>
          <Box>
            <h1>{page_config.text.h1}</h1>
            <h3>{page_config.text.h3}</h3>
            <button>
              <h3>Saiba mais</h3>
            </button>
          </Box>
          <img src={page_config.image} />
        </>
      )
    }
  }

  return (
    <Pages color={page_config.background_color}>
      {renderPages(page_config)}
    </Pages>
  )
}

export default BasicPages
