import React from 'react'
import { Link } from 'react-router-dom';

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
    </div>
  )
}

export default Navbar