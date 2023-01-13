import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footerpage } from './components/footpage'
import { Header } from './components/heading'
import InConstructionPage from './pages/construction'

import { Landing } from './pages/landing'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sobre-mim' element={<InConstructionPage />} />
        <Route path='/contato' element={<InConstructionPage />} />
        <Route path='/livro' element={<InConstructionPage />} />
        <Route path='/cursos' element={<InConstructionPage />} />
        <Route path='/mentorias' element={<InConstructionPage />} />
        <Route path='/palestras-e-treinamentos' element={<InConstructionPage />} />
        <Route path='/consultoria' element={<InConstructionPage />} />
        {/* <Route path='*' element={<Landing />} /> */}
      </Routes>
      <Footerpage />
    </BrowserRouter>
  )
}

export default App
