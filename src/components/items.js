import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Contador from './ItemCount/ItemCount.js'

const MediaCard = ({img, nombre, desc, stock, stockItem}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {desc}
        </Typography>
        <Typography variant="body3" color="text.primary">
          {stock}
        </Typography>
      </CardContent>
      <Contador stock={stockItem}/>
    </Card>
  );
}

export default MediaCard;