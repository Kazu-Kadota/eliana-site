import styled from 'styled-components'

import config from 'src/styles/config'

const colors = config.theme.colors

export const HeaderBlock = styled.aside`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  border-bottom: 0.1rem solid ${colors.others.lightGray};
  z-index: 2;
`

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  background: ${colors.others.white};

  a > img {
    display: block;
    width: 100%;
    height: 4.4rem;
    margin: 1rem 0.5rem;
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;

  li {
    position: relative;
    display: block;
    padding: 2.15rem 1.5rem;
    font-weight: 500;
    font-size: 1.7rem;
    color: ${colors.base.blue.shade_1};
  }

  li a {
    color: ${colors.base.blue.shade_1};
  }
`

export const HeaderList = styled.li`
  a::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background: ${colors.secondary.orange.shade_1};
    transition: all 300ms ease-in-out;
  }

  a:hover::after {
    width: 50%;
    left: 25%;
  }
`

export const HeaderListSublist = styled.li`
  span {
    cursor: default;
  }

  &:hover {
    display: block;
  }

  &:hover > div {
    visibility: visible;
    background: ${colors.others.white};
    opacity: 1;
    z-index: 2;
    transition: all 200ms ease-in-out;
  }

  &:hover > div > ul {
    display: block;
  }
`

export const HeaderDropDown = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 2.1rem;
  right: 0rem;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  z-index: -1;

  ul {
    display: none;
    border-top: 0.1rem solid ${colors.others.lightGray};
  }

  ul > li {
    max-width: 100%;
    border-bottom: 0.1rem solid ${colors.others.lightGray};
    border-right: 0.1rem solid ${colors.others.lightGray};
    border-left: 0.1rem solid ${colors.others.lightGray};
  }

  ul li a {
    justify-content: center;
  }
`
