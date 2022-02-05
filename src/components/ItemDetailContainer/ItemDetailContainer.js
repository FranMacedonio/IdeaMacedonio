import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProd(json))
    }, []);

    return (
        <div className='container'>
            {prod.map(item => {
                if(item.id === 2){
                    return (
                        <div key={item.id}>
                            <ItemDetail data={item}/>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default ItemDetailContainer;
