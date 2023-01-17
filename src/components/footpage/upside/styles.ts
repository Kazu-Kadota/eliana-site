import styled from 'styled-components'

import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens

export const Upside = styled.div`
  height: 100%;
  background: ${colors.base.blue.shade_1};
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem 5rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);

  @media (${screens.min_sizes.sp_lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${screens.min_sizes.dt_sm}) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 7.5rem;
  }

  @media (${screens.min_sizes.dt_lg}) {
    padding: 0 15rem;
  }
`

export const ColumnContent = styled.div `
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media (${screens.min_sizes.dt_sm}) {
    padding: 2rem 0;
  }

  h4 {
    color: ${colors.others.white};
    padding-bottom: 2rem;
    font-size: ${font_sizes.sp.lg};
    font-weight: 500;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl}
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.sm}
    }
  }

  a {
    color: ${colors.others.lightGray};
    padding-bottom: 1rem;
    font-size: ${font_sizes.sp.md};
    text-indent: 1rem;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.lg}
    }


    @media (${screens.min_sizes.dt_sm}) {
      text-indent: 0;
      font-size: ${font_sizes.dt.xs};
    }
  }
`
