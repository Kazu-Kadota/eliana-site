import React, { useEffect, useState } from 'react'

import GlobalStyle from './styles/GlobalStyle'
// import './App.css'
import { Landing } from './pages/landing'

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
     window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Landing />
    </div>
  )
}

export default App
