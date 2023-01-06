import React from 'react'

import { BasicPage } from 'src/types/basic_page'

import {
  Pages,
  Box,
} from './styles'

const basicPages = (page_config: BasicPage) => {
  const renderPages = (page_config: BasicPage) => {
    if(page_config.variation.a) {
      return (
        <div>
          <Box>
            <h1>{page_config.text.h1}</h1>
            <h3>{page_config.text.h3}</h3>
            <a href={page_config.variation.a}>Saiba mais</a>
          </Box>
          <img src={page_config.image} />
        </div>
      )
    } else if (page_config.variation.button) {
      return (
        <div>
          <Box>
            <h1>{page_config.text.h1}</h1>
            <h3>{page_config.text.h3}</h3>
            <button>
              <h3>Saiba mais</h3>
            </button>
          </Box>
          <img src={page_config.image} />
        </div>
      )
    }
  }

  return (
    <Pages color={page_config.background_color}>
      {renderPages(page_config)}
    </Pages>
  )
}

export default basicPages
