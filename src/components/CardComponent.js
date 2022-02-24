import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardComponent = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center', margin: '10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="140"
          image={data.imagen}
          alt={data.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cantidad en stock: {data.stock}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          ${data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;