import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Concursantes from '../concursantes/Concursantes'
import Main from '../main/Main'

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='concursantes' element={<Concursantes />} />
      </Routes>
    </Router>
  )
}

export default Rutas