import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCart } from '../cart/CartContext'

const Navbar = () => {

  const prods = useCart();

  const productosCarrito = prods.reduce((total,b) => total + b.cantidad, 0);

  return (
      <div id='navbar'>
          <div id='logo'>
              <Link to='/'>
                <h1>What do i wear?</h1>
              </Link>
          </div>
          <div id='links'>
              <ul>
                  <Link to='/men' className='men'>
                    Men's
                  </Link>
                  <Link to='/women' className='women'>
                    Women's
                  </Link>
                  <Link to='/luxary' className='luxary'>
                    Luxary
                  </Link>
              </ul>
          </div>
          <Link to={'/cart'}>
            <div id='cart'>
                <ShoppingCartIcon />
                <p>{productosCarrito}</p>
            </div>
          </Link>
      </div>
  );
};

export default Navbar;
