import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Contador from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

import { useDispathCart, useCart } from '../cart/CartContext'

class Producto {
  constructor (nombre, precio, cantidad, imagen, id){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
    this.id = id;
  }
}

const ItemCardDetail = ({data}) => {

    const cart = useCart();
    const dispatch = useDispathCart();

    const addToCart = () => {
      const cantidad = parseInt(document.querySelector('#contador p').textContent);
      let repetido = cart.find(name => name.nombre === data.title);

      if(cantidad === 0){
        alert('You must to get something!!')
      } else if (repetido){

        let indexRepetido = cart.indexOf(repetido);
        cart[indexRepetido].cantidad = cart[indexRepetido].cantidad + cantidad;
        dispatch({ type: 'REFRESH', cart});

      } else{
        let prod = new Producto(data.title, data.price, cantidad, data.image, data.id);
        dispatch({ type: 'ADD', prod});
      }
    };

  return (
    <Card sx={{ maxWidth: 900, display: 'flex' }}>
        <CardMedia
          component="img"
          width="140"
          image={data.image}
          alt={data.title}
        />
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${data.price}
          </Typography>
          <Contador />
          <div id='compra'></div>
          <button id='agregar' onClick={addToCart}>Add in the cart</button>
          <Link to={'/cart'}><button>Purchase</button></Link>
        </CardContent>
    </Card>
  );
}

export default ItemCardDetail;