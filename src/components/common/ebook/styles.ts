import styled from 'styled-components'

import config from '@/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens
const variable = config.var

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url('/assets/images/background/default.svg');

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
      width: 40vw;
    }

    @media (${screens.min_sizes.dt_lg}) {
      width: 60vw;
    }
  }
`

export const EbookContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;

  @media (${screens.min_sizes.dt_sm}) {
    margin: 0 0 0 10rem;
  }

  & > h1 {
    padding: 0 1rem;
    color: ${colors.base.blue.shade_1};
    font-weight: bold;
    font-size: ${font_sizes.sp.xxl};
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.dt.xl};
      margin: 2rem 0;
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.xl};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.xxl};
    }
  }

  & > h2 {
    padding: 0 1rem;
    color: ${colors.base.blue.shade_1};
    font-weight: 500;
    font-size: ${font_sizes.sp.xxl};
    text-align: center;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.dt.xl};
      margin: 2rem 0;
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.sm};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.md};
    }
  }
`

export const EbookForms = styled.form`
  position: relative;
  width: 90%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${screens.min_sizes.sp_lg}) {
    width: 100%;
    padding: 0 0;
  }
  @media (${screens.min_sizes.dt_lg}) {
  }

  & > input[type=text] {
    max-width: 50rem;
    width: 100%;
    margin: 1rem 0;
    padding: 1.2rem 2rem;
    font-size: ${font_sizes.dt.xs};
    box-sizing: border-box;

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.sp.md};
    }

    @media (${screens.min_sizes.dt_sm}) {
      width: 50rem;
      font-size: ${font_sizes.dt.xxs};
    }

    @media (${screens.min_sizes.dt_lg}) {
      width: 60rem;
      font-size: ${font_sizes.dt.xs};
    }
  }

  & > input[type=submit] {
    background: ${colors.secondary.yellow.shade_1};
    width: 90%;
    min-height: 4rem;
    max-height: 6rem;
    height: 7vh;
    margin-top: 1.5rem;
    border: none;
    border-radius: 5rem;
    font-weight: 700;
    font-size: ${font_sizes.sp.lg};
    cursor: pointer;
    box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      width: 85%;
      height: 6rem;
      font-size: ${font_sizes.dt.xs};
    }

    @media (${screens.min_sizes.dt_lg}) {
      height: 8rem;
      font-size: ${font_sizes.dt.sm};
    }
  }

  & > input[type=submit]:hover {
    background: ${colors.secondary.orange.shade_3};
    box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
    transform: translateY(-1rem);
  }
`
