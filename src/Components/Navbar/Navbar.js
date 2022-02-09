import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
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
          <div id='cart'>
              <ShoppingCartIcon />
              <p>0</p>
          </div>
      </div>
  );
};

export default Navbar;
