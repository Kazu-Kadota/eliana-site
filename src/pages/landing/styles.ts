import styled from 'styled-components'
import config from 'src/styles/config'

const variable = config.var

export const Container = styled.section`
  position: relative;
`

export const FooterPage = styled.div`
  height: calc(100vh - ${variable.header_height} - ${variable.footer_height});
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`
