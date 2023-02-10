import styled from 'styled-components'

import {
  Box,
  Pages,
} from '@/components/common/basic-pages/styles'
import config from '@/styles/config'

const variable = config.var
const screens = config.screens

export const Container = styled(Pages)`
  margin-top: ${variable.header_height};

  @media (${screens.min_sizes.dt_sm}) {
    flex-direction: column;
  }

  & > img {
    max-width: 20rem;
    object-position: 25% 30%;

    @media (${screens.min_sizes.dt_sm}) {
      max-width: none;
      width: 50vw;
      max-height: 40rem;
      min-height: 40rem;
      height: auto;
      object-position: 50% 30%;
    }

    @media (${screens.min_sizes.dt_lg}) {
      height: 70vh;
    }
  }
`

export const Wrapper = styled(Box)`
  @media (${screens.min_sizes.dt_sm}) {
    max-width: none;
    width: 90rem;
    height: 30rem;
    padding: 0 5rem;
  }

  @media (${screens.min_sizes.dt_lg}) {
    width: 130rem;
  }
`
