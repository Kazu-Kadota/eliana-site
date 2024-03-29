import styled from 'styled-components'

import config from '@/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens

export const Pages = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.color};

  & > img {
    max-width: 50rem;
    width: 75vw;
    max-height: 30rem;
    height: 30vh;
    margin: 3rem 0;
    object-fit: cover;
    object-position: 0% 25%;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 1.0rem .2rem rgba(0, 0, 0, 0.3);

    @media (orientation: landscape) {
      min-height: 30vw;
      object-position: 50% 40%;
      width: auto;
      max-height: 70rem;
      height: 60vh;
    }

    @media (min-width: 660px) {
      object-position: 0% 30%;
    }

    @media (${screens.min_sizes.sp_lg}) {
      max-height: none;
      height: 35vh;
    }

    @media (${screens.min_sizes.dt_sm}) {
      object-position: 50% 40%;
      width: auto;
      max-height: 70rem;
      height: 60vh;
      margin: 0;
    }

    @media (${screens.min_sizes.dt_lg}) {
      height: 70vh;
    }
  }

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (${screens.min_sizes.dt_sm}) {
    flex-direction: row;
    padding: 5rem 0;
  }
`

export const Box = styled.div`
  max-width: 50rem;
  width: 75vw;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (${screens.min_sizes.dt_sm}) {
    max-width: 80rem;
    width: 50rem;
    height: 60vh;
    padding: 0;
  }

  @media (${screens.min_sizes.dt_lg}) {
    width: 80rem;
    height: 70vh;
  }

  & > h1 {
    color: ${colors.base.blue.shade_1};
    font-size: ${font_sizes.sp.lg};
    text-align: left;
    padding: 1rem;
    margin: 2rem 0;

    @media (${screens.min_sizes.sp_sm}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xxl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      margin: 0;
      font-size: ${font_sizes.dt.xl};
      text-align: right;
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.xxl};
    }
  }

  & > p {
    width: 100%;
    margin: 1rem 0;
    font-size: ${font_sizes.sp.md};
    text-align: justify;

    @media (${screens.min_sizes.sp_sm}) {
      font-size: ${font_sizes.sp.lg};
    }

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      margin: 0;
      font-size: ${font_sizes.dt.sm};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.md};
    }
  }

  & > a {
    display: block;
    margin: 2rem 0;
    font-size: ${font_sizes.sp.xl};
    color: ${colors.secondary.orange.shade_1};

    @media (${screens.min_sizes.dt_sm}) {
      margin: 0;
      font-size: ${font_sizes.dt.sm};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.md};
    }

    & > button {
      background: ${colors.secondary.yellow.shade_1};
      max-width: 50rem;
      width: 75vw;
      min-height: 4rem;
      max-height: 6rem;
      height: 7vh;
      margin: 2rem 0;
      border: none;
      border-radius: 5rem;
      cursor: pointer;
      box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease 0s;

      @media (${screens.min_sizes.dt_sm}) {
        width: 50rem;
        height: 6rem;
      }

      @media (${screens.min_sizes.dt_lg}) {
        height: 8rem;
        margin: 0;
      }
    }

    & > button:hover {
      background: ${colors.secondary.orange.shade_3};
      box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
      transform: translateY(-1rem);
    }

    & > button > h3 {
      font-size: ${font_sizes.sp.lg};
      font-weight: 700;

      @media (${screens.min_sizes.sp_lg}) {
        font-size: ${font_sizes.sp.xl};
      }

      @media (${screens.min_sizes.dt_sm}) {
        font-size: ${font_sizes.dt.sm};
      }

      @media (${screens.min_sizes.dt_lg}) {
        font-size: ${font_sizes.dt.md};
      }
    }
  }

  & > button {
    background: ${colors.secondary.yellow.shade_1};
    max-width: 50rem;
    width: 75vw;
    min-height: 4rem;
    max-height: 6rem;
    height: 7vh;
    margin: 2rem 0;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;

    @media (${screens.min_sizes.dt_sm}) {
      width: 50rem;
      height: 6rem;
    }

    @media (${screens.min_sizes.dt_lg}) {
      height: 8rem;
      margin: 0;
    }
  }

  & > button:hover {
    background: ${colors.secondary.orange.shade_3};
    box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
    transform: translateY(-1rem);
  }

  & > button > h3 {
    font-size: ${font_sizes.sp.lg};
    font-weight: 700;

    @media (${screens.min_sizes.sp_lg}) {
      font-size: ${font_sizes.sp.xl};
    }

    @media (${screens.min_sizes.dt_sm}) {
      font-size: ${font_sizes.dt.sm};
    }

    @media (${screens.min_sizes.dt_lg}) {
      font-size: ${font_sizes.dt.md};
    }
  }
`
