import styled from 'styled-components'
import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens
const variable = config.var

export const Pages = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${variable.header_height});
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`

export const PhotoColection = styled.div`
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  & > h1 {
    font-size: ${font_sizes.sp.xl};
    color: ${colors.base.blue.shade_1};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xxl}
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xl}
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.xxl}
    }
  }

  & > a {
    font-size: ${font_sizes.sp.md};
    font-weight: 500;
    color: ${colors.base.blue.shade_1};

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.lg};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xs};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.sm};
    }
  }
`

export const PhotoWrapper = styled.div`
  padding: 8rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 40rem;

  @media (${screens.min_sizes.sp_lg}) {
    flex-direction: row;
    max-width: 1124px;
  }
`

export const ContentBlock = styled.div`
  flex: 1;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`

export const ImagesBlock = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  vertical-align: top;
  filter: brightness(60%);
  object-fit: cover;
  object-position: 50% 40%;
  box-shadow: 0.5rem 0.5rem 1.0rem .2rem rgba(0, 0, 0, 0.3);
`

export const TextBlock = styled.h2`
  position: absolute;
  padding-left: 2vw;
  margin-top: -10rem;
  color: ${colors.others.white};
  width: 17vw;
  padding-right: 7rem;
  font-size: ${font_sizes.sp.lg};

  @media (${screens.min_sizes.sp_lg}) {
    margin-top: -12rem;
    font-size: ${font_sizes.sp.xl}
  }

  @media (${screens.min_sizes.dt_sm}) {
    margin-top: -15rem;
    font-size: ${font_sizes.dt.md}
  }

  @media (${screens.min_sizes.dt_lg}) {
    margin-top: -20rem;
    font-size: ${font_sizes.dt.lg}
  }
`
