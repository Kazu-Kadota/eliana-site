import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footerpage } from './components/footpage'
import { Header } from './components/heading'
import BookPage from './pages/book'
import InConstructionPage from './pages/construction'
import ContactMe from './pages/contact-me'

import { Landing } from './pages/landing'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sobre-mim' element={<InConstructionPage />} />
        <Route path='/contato' element={<ContactMe />} />
        <Route path='/livro' element={<BookPage />} />
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
