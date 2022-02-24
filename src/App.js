import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home';
import ItemDetail from './views/ItemDetail';
import Categoria from './views/Categoria';

//COMPONENTS
import Navbar from './components/Navbar';



function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalles/:id' element={<ItemDetail />} />
        <Route path='/categoria/:categoria' element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;