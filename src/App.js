import React, { useState } from 'react'
import Header from './componts/header/Header'
import Home from './pages/home/Home';
import About from './pages/about/About'
import Contact from './pages/countact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Serves from './pages/serves/Serves';
import Footer from './componts/footer/Footer';
import Dark from './componts/darkMod/Dark';
const LazyN = React.lazy(() => import('./pages/protfolio/Protfolio'))
const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Dark />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/serves' element={<Serves />} />
          <Route path='/protfolio' element={
            <React.Suspense fallback='Loding....'>
              <LazyN />
            </React.Suspense>
          } />
          <Route path='/countact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App