import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footerpage } from './components/footpage'
import { Header } from './components/heading'

import { Landing } from './pages/landing'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sobre-mim' element={<Landing />} />
        <Route path='/contato' element={<Landing />} />
        <Route path='/livro' element={<Landing />} />
        <Route path='/cursos' element={<Landing />} />
        <Route path='/mentorias' element={<Landing />} />
        <Route path='/palestras-e-treinamentos' element={<Landing />} />
        <Route path='/consultoria' element={<Landing />} />
        {/* <Route path='*' element={<Landing />} /> */}
      </Routes>
      <Footerpage />
    </BrowserRouter>
  )
}

export default App
