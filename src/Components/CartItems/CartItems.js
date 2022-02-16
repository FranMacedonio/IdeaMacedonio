import React from 'react'

const CartItems = ({producto}) => {
  return (
    <div id='cartItemContainer'>
        <img src={producto.imagen} alt={producto.nombre} width={50}/>
        <h3>{producto.nombre}</h3>
        <h2>${producto.precio} x {producto.cantidad} = ${producto.precio * producto.cantidad}</h2>
        <h1>X</h1>
    </div>
  )
}

export default CartItems