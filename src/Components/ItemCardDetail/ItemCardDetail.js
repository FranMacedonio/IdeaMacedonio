import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Contador from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemCardDetail = ({data}) => {
    const [stock, setStock] = React.useState(5);

    const click = () => {
      let contadorN = document.querySelector('#contador p').textContent;
      let contadorM = parseInt(contadorN);
      if (contadorM != 0){
        setStock( stock - contadorM );
        let contadorO = document.getElementById('contador');
        let botonAgregar = document.getElementById('agregar');
        contadorO.remove();
        botonAgregar.remove();
        let compra = document.getElementById('compra');
        compra.innerHTML = `<p>You got ${contadorM} ${data.title} to the cart for $${data.price * contadorM}.</p>`
      } else {
        alert(`You must to get more than 0 products!`)
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
          <Typography variant="body2" color="text.secondary">
            In Stock {stock}
          </Typography>
          <Contador stock={stock} />
          <div id='compra'></div>
          <button id='agregar' onClick={click}>Get in the cart</button>
          <Link to={'/cart'}><button>Purchase</button></Link>
        </CardContent>
    </Card>
  );
}

export default ItemCardDetail;