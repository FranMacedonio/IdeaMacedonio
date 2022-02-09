import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemCardDetail from '../ItemCardDetail/ItemCardDetail'

const ItemDetail = () => {
    const [item, setItem] = useState({});

    let id = useParams().id;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setItem(json))
        }, [id]);

    return (
        <div className='itemContainer' key={item.id}>
            <ItemCardDetail data={item} />
        </div>
    );
}

export default ItemDetail;