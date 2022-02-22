import React from 'react'
import { useCart, useDispathCart } from '../../Components/cart/CartContext'
import CartItems from '../../Components/CartItems/CartItems';
import { Link } from 'react-router-dom';

const Cart = () => {
  const productos = useCart();
  const dispatch = useDispathCart();
  const totalPrice = productos.reduce( (total, b) => total + b.precio * b.cantidad, 0);

  const remove = index => {
    dispatch({ type: 'REMOVE', index});
  };

  const clear = () => {
    dispatch({type: 'CLEAR'})
  };

  if(productos.length === 0) {
    return (
      <>
      <ul className='cartContainer'>
        <Link to='/men' className='men cartText'>
          Men's
        </Link>
        <Link to='/women' className='women cartText'>
          Women's
        </Link>
        <Link to='/luxary' className='luxary cartText'>
          Luxary
        </Link>
      </ul>
      <h1 style={{textAlign: 'center', marginTop: 50}}>Elige alguna de nuestras opciones para ti</h1>
      </>
    );
  }
  return (
    <div id='cartContent'>
      {productos.map( (prod, index) => {
        return (
          <CartItems key={index} producto={prod} remove={remove} index={index} />
        );
      })}
      <h1>Total Price: ${totalPrice}</h1>
      <button onClick={clear}>Clear Cart</button>
    </div>
  )
}

export default Cart