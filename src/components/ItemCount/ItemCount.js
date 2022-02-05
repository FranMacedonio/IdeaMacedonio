import React, { useState } from 'react';
import "./ItemCount.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Contador = (stock) => {

    const [counter, setCounter] = useState(0);
    let stockItem = stock;

    const sumarItem = () => {
        if(counter < parseInt(stockItem['stock'])) {
            setCounter( counter + 1 );
        }
    }

    const restarItem = () => {
        if(counter !== 0){
            setCounter( counter - 1 );
        }
    }



    return (
        <div className='containerContador'>
            <div className='contador'>
                <button onClick={restarItem}><RemoveIcon /></button>
                <p className='numero'>{counter}</p>
                <button onClick={sumarItem}><AddIcon /></button>
            </div>
            <h6>Total Price: {22.3 * counter}</h6>
            <button className='agregar'>Agregar al carrito</button>
        </div>
    );

}

export default Contador;