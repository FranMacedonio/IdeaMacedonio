import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ItemCardDetail = ({data}) => {
    const [contador, setContador] = React.useState(0)
    
    const remover = () => {
        if (contador > 0) {
            setContador( contador - 1 );
        }
    };
    const agregar = () => {
        if (contador < 5) {
            setContador( contador + 1 );
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
            In Stock 5
          </Typography>
          <div id='contador'>
            <button onClick={remover}><RemoveCircleOutlineIcon /></button>
            <p>{contador}</p>
            <button onClick={agregar}><AddCircleOutlineIcon /></button>
          </div>
        </CardContent>
    </Card>
  );
}

export default ItemCardDetail;