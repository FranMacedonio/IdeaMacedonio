import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

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
              <p>Cart</p>
          </div>
      </div>
  );
};

export default Navbar;
