import React from 'react'
import { Footerpage } from './components/desktop/footpage'
import { Header } from './components/desktop/heading'

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
