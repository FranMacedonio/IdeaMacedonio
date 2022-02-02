import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Contador from './ItemCount/ItemCount.js'

const MediaCard = ({ data }) => {

  let numero = parseInt((data.rating.count)/100)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        width="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {data.description}
        </Typography>
        <Typography variant="body3" color="text.primary">
          Stock: {numero}
        </Typography>
      </CardContent>
      <Contador stock={numero}/>
    </Card>
  );
}

export default MediaCard;