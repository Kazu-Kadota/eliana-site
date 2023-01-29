import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BasicPage } from 'src/types/basic-page'

import {
  Pages,
  Box,
} from './styles'

interface BasicPageType {
  page_config: BasicPage
}

const BasicPages: React.FC<BasicPageType> = ({page_config}) => {
  const navigate = useNavigate()

  const redirectPage = () => {
    navigate(
      `${page_config.link?.button}`,
      {
        replace: true,
        relative: 'path',
      }
    )
  }

  const renderPages = (page_config: BasicPage) => {
    let H1: JSX.Element | undefined = undefined
    let p1: JSX.Element | undefined = undefined
    let p2: JSX.Element | undefined = undefined
    let p3: JSX.Element | undefined = undefined
    let p4: JSX.Element | undefined = undefined
    let p5: JSX.Element | undefined = undefined

    if(page_config.text?.h1) {
      H1 = <h1>{page_config.text?.h1}</h1>
    }

    if(page_config.text?.p1) {
      p1 = <p>{page_config.text?.p1}</p>
    }

    if(page_config.text?.p2) {
      p2 = <p>{page_config.text?.p2}</p>
    }

    if(page_config.text?.p3) {
      p3 = <p>{page_config.text?.p3}</p>
    }

    if(page_config.text?.p4) {
      p4 = <p>{page_config.text?.p4}</p>
    }

    if(page_config.text?.p5) {
      p5 = <p>{page_config.text?.p5}</p>
    }

    if(page_config.link?.a) {
      if (page_config.link?.external) {
        return (
          <>
            <Box>
              {H1}
              {p1}
              {p2}
              {p3}
              {p4}
              {p5}
              <a href={page_config.link?.a}>{page_config.link.content}</a>
            </Box>
            <img src={page_config.image} />
          </>
        )
      }
      return (
        <>
          <Box>
            {H1}
            {p1}
            {p2}
            {p3}
            {p4}
            {p5}
            <Link to={page_config.link?.a}>{page_config.link.content}</Link>
          </Box>
          <img src={page_config.image} />
        </>
      )
    } else if (page_config.link?.button) {
      if (page_config.link?.external) {
        return (
          <>
            <Box>
              {H1}
              {p1}
              {p2}
              {p3}
              {p4}
              {p5}
              <a href={page_config.link.button} target="_blank" rel="noreferrer noopener">
                <button>
                  <h3>{page_config.link.content}</h3>
                </button>
              </a>
            </Box>
            <img src={page_config.image} />
          </>
        )
      }
      return (
        <>
          <Box>
            {H1}
            {p1}
            {p2}
            {p3}
            {p4}
            {p5}
            <button onClick={redirectPage}>
              <h3>{page_config.link.content}</h3>
            </button>
          </Box>
          <img src={page_config.image} />
        </>
      )
    }

    return (
      <>
        <Box>
            {H1}
            {p1}
            {p2}
            {p3}
            {p4}
            {p5}
        </Box>
        <img src={page_config.image} />
      </>
    )
  }

  return (
    <Pages color={page_config.background_color}>
      {renderPages(page_config)}
    </Pages>
  )
}

export default BasicPages
