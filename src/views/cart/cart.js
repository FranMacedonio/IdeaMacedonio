import React from 'react'
import { useCart } from '../../Components/cart/CartContext'
import CartItems from '../../Components/CartItems/CartItems';

const Cart = () => {
  const productos = useCart();

  return (
    <div id='cartContent'>
      {productos.map( prod => {
        return (
          <CartItems key={prod.id} producto={prod} />
        );
      })}
    </div>
  )
}

export default Cart