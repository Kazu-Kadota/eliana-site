import styled from 'styled-components'

import * as colors from 'src/styles/colors'
import { gapHeader } from 'src/styles/gap'

export const Aside = styled.aside`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  border-bottom: 0.1rem solid ${colors.lightGray};

  a > img {
    display: block;
    width: 100%;
    height: 4.4rem;
    padding: 1rem 0.5rem;
  }
`

export const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  ul li a {
    position: relative;
    display: block;
    padding: 1.5rem;
    font-weight: 500;
    font-size: 1.7rem;
    color: ${colors.baseBlueShade1};
  }

  ul li a::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background: ${colors.secondaryOrangeShade1};
    transition: all 300ms ease-in-out;
  }

  ul li a:hover::after {
    width: 50%;
    left: 25%;
  }

`
