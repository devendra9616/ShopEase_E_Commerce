import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Blog from '../Pages/Blog';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Card from '../Pages/Card';
import Sproduct from '../Pages/Sproduct';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Card' element={<Card />} />
          <Route path='/Sproduct' element={<Sproduct />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
