import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ({img, nombre, desc}) => {
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
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='btn' size="medium">Comprar</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;