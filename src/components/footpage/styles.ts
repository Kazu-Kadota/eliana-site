import styled from 'styled-components'
import * as colors from 'src/styles/colors'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Upside = styled.div`
  height: 20rem;
  background: ${colors.baseBlueShade1};
  display: flex;
  justify-content: space-between;
  padding: 0 15rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
`

export const ColumnContent = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  h4 {
    color: ${colors.white};
    padding-bottom: 2rem;
    font-weight: 500;
  }

  a {
    color: ${colors.lightGray};
    padding-bottom: 1rem;
    font-size: 2rem;
  }
`

export const DownSide = styled.div`
  width: 100%;
  height: 17rem;
  background: ${colors.baseBlueShade1};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    width: 15rem;
    height: auto;
    padding-left: 5rem;
  }
`

export const Icons = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-evenly;
  padding-right: 5rem;

  & > img {
    width: 4rem;
    height: auto;
  }
`
