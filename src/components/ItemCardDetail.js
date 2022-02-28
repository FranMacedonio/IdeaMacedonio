import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Contador from '../components/ItemCount'
import { Link } from 'react-router-dom';

import { useDispathCart, useCart } from '../components/Context'

const ItemCardDetail = ({data}) => {

    const cart = useCart();
    const dispatch = useDispathCart();

    const addToCart = () => {
      const cantidad = parseInt(document.querySelector('#contador p').textContent);
      let repetido = cart.find(name => name.nombre === data.titulo);

      if(cantidad === 0){
        alert('You must to get something!!')
      } else if (repetido){

        let indexRepetido = cart.indexOf(repetido);
        cart[indexRepetido].cantidad = cart[indexRepetido].cantidad + cantidad;
        dispatch({ type: 'REFRESH', cart});

      } else{
        const prod = {
          titulo: data.titulo,
          precio: data.precio,
          cantidad: cantidad,
          imagen: data.imagen,
          id: data.id};
        dispatch({ type: 'ADD', prod});
      }
    };

  return (
    <Card sx={{ maxWidth: 900, display: 'flex' }}>
        <CardMedia
          component="img"
          width="140"
          image={data.imagen}
          alt={data.titulo}
        />
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {data.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.descripcion}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${data.precio}
          </Typography>
          <Contador />
          <div id='compra'></div>
          <button id='agregar' onClick={addToCart}>Añadir al carrito</button>
          <Link to={'/cart'}><button>Comprar</button></Link>
        </CardContent>
    </Card>
  );
}

export default ItemCardDetail;