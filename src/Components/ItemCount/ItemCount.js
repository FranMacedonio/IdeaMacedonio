import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const Contador = (stock) => {

    const [counter, setCounter] = useState(0);
    let stockItem = stock;

    const sumarItem = () => {
        if(counter < parseInt(stockItem.stock)) {
            setCounter( counter + 1 );
        }
    }

    const restarItem = () => {
        if(counter !== 0){
            setCounter( counter - 1 );
        }
    }

    const click = () => {
        if (counter !== 0){
          let contadorO = document.getElementById('contador');
          let botonAgregar = document.getElementById('agregar');
          contadorO.remove();
          botonAgregar.remove();
          let compra = document.getElementById('compra');
          compra.innerHTML = `<p>You got ${counter} to the cart.</p>`
        } else {
          alert(`You must to get more than 0 products!`)
        }
      };

    return (
        <>
            <div id='contador'>
                <button onClick={restarItem}><RemoveIcon /></button>
                <p>{counter}</p>
                <button onClick={sumarItem}><AddIcon /></button>
            </div>
            <div id='compra'></div>
            <button id='agregar' onClick={click}>Get in the cart</button>
            <Link to={'/cart'}><button>Purchase</button></Link>
        </>
    );

}

export default Contador;