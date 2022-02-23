import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home'
import Remeras from './views/Remeras'
import Pantalones from './views/Pantalones'
import Zapatillas from './views/Zapatillas'

//COMPONENTS
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/remeras' element={<Remeras />} />
        <Route path='/pantalones' element={<Pantalones />} />
        <Route path='/zapatillas' element={<Zapatillas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;