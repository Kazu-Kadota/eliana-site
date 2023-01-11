import styled from 'styled-components'

import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes

export const HeaderMenuButtonListContent = styled.li`
  height: 8rem;
  display: grid;
  padding: 0 5rem;
  border-bottom:  0.1rem solid ${colors.others.lightGray};
  text-align: left;
  align-content: center;

  a {
    font-size: ${font_sizes.sp.lg};
    color: ${colors.base.blue.shade_1};
  }
`

export const HeaderMenuButtonListSubList = styled.button`
  height: 8rem;
  display: flex;
  width: 100%;
  background-color: ${colors.others.white};
  border: 0;
  padding: 0 5rem;
  border-bottom:  0.1rem solid ${colors.others.lightGray};
  justify-content: space-between;
  align-items: center;

  span {
    font-size: ${font_sizes.sp.lg};
    color: ${colors.base.blue.shade_1};
  }

  &:hover > div {
    background: ${colors.others.white};
    top: 0rem;
    opacity: 1;
    z-index: 2;
    transition: right 500ms ease-in-out;
  }
`

export const HeaderMenuButtonSubListContent = styled(HeaderMenuButtonListContent)`
  text-indent: 2rem;

  a::after {
    display: block;
  }

  a:hover::after {
    width: 50%;
    left: 25%;
  }
`
