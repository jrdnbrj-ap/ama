import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos'
import Proyectos from '../pages/Proyectos'
import Galeria from '../pages/Galeria'
import Kairos from '../pages/Kairos'
import Contactos from '../pages/Contactos'


const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/kairos' element={<Kairos />} />
          <Route path='/contactos' element={<Contactos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default WebRoutes
