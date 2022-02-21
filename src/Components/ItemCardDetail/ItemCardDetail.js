import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Contador from '../ItemCount/ItemCount'

const ItemCardDetail = ({data}) => {
    let randomStock = parseInt(Math.random()*10);

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
          <Typography id='stockText' variant="body2" color="text.secondary">
            In Stock <span>{randomStock}</span>
          </Typography>
          <Contador stock={randomStock} />
        </CardContent>
    </Card>
  );
}

export default ItemCardDetail;