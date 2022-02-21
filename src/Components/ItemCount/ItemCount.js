import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Contador = () => {

    const [counter, setCounter] = useState(0);

    const sumarItem = () => {
        setCounter( counter + 1 );
    }

    const restarItem = () => {
        if(counter > 0){
            setCounter( counter - 1 );
        }
    }

    return (
        <>
            <div id='contador'>
                <button onClick={restarItem}><RemoveIcon /></button>
                <p>{counter}</p>
                <button onClick={sumarItem}><AddIcon /></button>
            </div>
        </>
    );

}

export default Contador;