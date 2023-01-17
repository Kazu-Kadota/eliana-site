import styled from 'styled-components'

import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens

export const DownSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${colors.base.blue.shade_1};

    @media (${screens.min_sizes.dt_sm}) {
      flex-direction: row;
      padding: 2rem 0;
    }

  & > a > img {
    width: 15rem;
    height: auto;
    padding: 2rem 0;

    @media (${screens.min_sizes.dt_sm}) {
      padding: 0;
      padding-left: 5rem;
    }
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 2rem 0;
    text-align: center;
    font-size: ${font_sizes.sp.md};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.lg}
    }

    @media (${screens.min_sizes.dt_sm}) {
      width: 40rem;
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0;
      font-size: ${font_sizes.dt.xs};
    }
  }
`

export const Icons = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;

  @media (${screens.min_sizes.dt_sm}) {
    padding: 0;
    padding-right: 5rem;
  }

  & > a > svg {
    width: 4rem;
    height: auto;
  }
`
