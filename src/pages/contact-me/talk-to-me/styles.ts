import styled from 'styled-components'

import DefaultBackground from 'src/assets/images/background/default.svg'
import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens
const variable = config.var

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: ${variable.header_height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${DefaultBackground});

  @media (${screens.min_sizes.dt_sm}) {
    max-height: calc(100vh - ${variable.header_height});
    flex-direction: row;
  }

  & > img {
    max-width: 40rem;
    width: 60vw;
    height: 100%;

    @media (${screens.min_sizes.dt_sm}) {
      max-width: 55rem;
    }
  }
`

export const ContactWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;

  @media (${screens.min_sizes.dt_sm}) {
    margin: 0 5rem 0 10rem;
  }

  @media (${screens.min_sizes.dt_lg}) {
    margin: 0 5rem 0 30rem;
  }

  & > p {
    color: ${colors.base.blue.shade_1};
    font-weight: bold;
    font-size: ${font_sizes.sp.xxl};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.dt.xl};
      margin: 2rem 0;
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.xxl};
    }
  }
`

export const SocialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`

export const RowContent = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: left;
  align-items: center;

  @media (${screens.min_sizes.dt_sm}) {
    padding: 5rem 0;
  }

  & > p {
    padding: 0 1.5rem;
    color: ${colors.base.blue.shade_1};
    font-weight: 500;
    font-size: ${font_sizes.sp.lg};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.dt.sm};
    }

    @media (${screens.min_sizes.dt_sm}) {
      padding: 0 3rem;
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.md};
    }
  }

  .image {
    max-width: 3rem;
    max-height: 3rem;

    @media (${screens.min_sizes.sp_lg}) {
      max-width: 5rem;
      max-height: 5rem;
    }
  }
`

export const Image = styled.img`
  width: ${props => props.sizes}
`
