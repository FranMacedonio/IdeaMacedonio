import React, { useState, useEffect } from 'react';
import MediaCard from './items.js'
import './itemsList.css'

const ItemsList = () => {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProd(json))
    }, []);

    
    return (
        
        <div className='productos'>
            {prod.map((prod) => {
                
                return(
                    <div key={prod.id}>
                        <MediaCard data={prod} />
                    </div>
                );
                
            })}
        </div>

    );
}
export default ItemsList;