import styled from 'styled-components'

import config from 'src/styles/config'

const colors = config.theme.colors
const variable = config.var

export const Pages = styled.div`
  background-color: ${props => props.color};

  & > div {
    width: 100%;
    height: calc(100vh - ${variable.header_height});
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  & > div > img {
    max-height: 70vh;
    width: auto;
    object-fit: cover;
    object-position: 50% 40%;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 1.0rem .2rem rgba(0, 0, 0, 0.3);
  }
`

export const Box = styled.div`
  width: 80rem;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: ${colors.base.blue.shade_1};
    text-align: right;
  }

  & > h3 {
    text-align: center;
  }

  & > a {
    display: block;
    font-size: 3.2rem;
    color: ${colors.secondary.orange.shade_1}
  }

  & > button {
    background: ${colors.secondary.yellow.shade_1};
    width: 48rem;
    height: 8rem;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    box-shadow: -1.5rem 1.5rem 1.0rem .2rem rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease 0s;
  }

  & > button:hover {
    background: ${colors.secondary.orange.shade_3};
    box-shadow: -2rem 2rem 1.5rem .5rem rgba(0, 0, 0, 0.5);
    transform: translateY(-1rem);
  }

  & > button > h3 {
    font-weight: 700;
  }
`
