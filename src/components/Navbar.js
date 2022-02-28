import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  return (
    <div id='navbar'>
        <Link to={'/'}>
            <div id='logo'>
                <h2>Ropa Comoda</h2>
            </div>
        </Link>
        <div id='links'>
            <Link to={'/categoria/remeras'}>Remeras</Link>
            <Link to={'/categoria/pantalones'}>Pantalones</Link>
            <Link to={'/categoria/zapatillas'}>Zapatillas</Link>
        </div>
        <Link id='cart' to={'/cart'}>
            <ShoppingBasketIcon fontSize="large" />
        </Link>
    </div>
  )
}

export default Navbar