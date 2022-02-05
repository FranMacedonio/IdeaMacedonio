import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'
import Contador from '../ItemCount/ItemCount'

const ItemDetail = ({data}) => {
  return (
    <Card sx={{ maxWidth: 1000, display: 'flex', textAlign: 'center', padding: 5 }}>
      <CardMedia
        component="img"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography marginTop={2} variant="body2" color="text.primary">
          Stock {data.rating.count - 251}
        </Typography>
        <Typography color={'rgb(66, 125, 165)'} gutterBottom variant="h6" component="div">
          ${data.price}
        </Typography>
        <CardActions>
            <Contador stock={data.rating.count - 251}/>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ItemDetail;