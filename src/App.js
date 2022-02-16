import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/home/home';
import Men from './views/men/men';
import Women from './views/women/women';
import Luxary from './views/luxary/luxary';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Cart from './views/cart/cart';

function App() {
  return (
    <BrowserRouter>
      <div id='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/luxary' element={<Luxary />} />
          <Route path='/detail/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;