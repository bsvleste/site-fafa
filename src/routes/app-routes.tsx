import { Routes, Route } from 'react-router-dom'
import { Slides } from '../pages/Slides'
import { Contato } from '../pages/Contato'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Slides />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}
