import React from 'react'

import { Footerpage } from './components/footpage'
import { Header } from './components/heading'
import { Landing } from './pages/landing'

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Footerpage />
    </div>
  )
}

export default App
