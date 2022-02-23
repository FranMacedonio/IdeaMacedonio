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
            <Link to={'/remeras'}>Remeras</Link>
            <Link to={'/pantalones'}>Pantalones</Link>
            <Link to={'/zapatillas'}>Zapatillas</Link>
        </div>
    </div>
  )
}

export default Navbar