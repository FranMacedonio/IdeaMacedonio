import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItems = ({producto, index, remove}) => {
  return (
    <div id='cartItemContainer'>
        <img src={producto.imagen} alt={producto.nombre} width={80}/>
        <h3>{producto.nombre}</h3>
        <h2>${producto.precio} x {producto.cantidad} = ${producto.precio * producto.cantidad}</h2>
        <h1 onClick={() => remove(index)}><DeleteForeverIcon /></h1>
    </div>
  )
}

export default CartItems