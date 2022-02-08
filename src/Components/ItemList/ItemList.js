import React, {useState, useEffect} from 'react';
import ItemCard from '../ItemCard/ItemCard'
import './ItemList.css'

const ItemList = (categoria) => {
    const [prod, setProd] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProd(json))
    }, []);

    if(categoria.categoria === 1){
        return (
            <>
                <div className='itemContainer'>
                    {prod.map((item) => {
                        if(item.category === "men's clothing"){
                            return (
                                <div key={item.id}>
                                    <ItemCard data={item} />
                                </div>
                            );
                        }
                    })}
                </div>
            </>
        );
    } else if (categoria.categoria === 2){
        return (
            <>
                <div className='itemContainer'>
                    {prod.map((item) => {
                        if(item.category === "women's clothing"){
                            return (
                                <div key={item.id}>
                                        <ItemCard data={item} />
                                </div>
                            );
                        }
                    })}
                </div>
            </>
        );
    } else if (categoria.categoria === 3){
        return (
            <>
                <div className='itemContainer'>
                    {prod.map((item) => {
                        if(item.category === "jewelery"){
                            return (
                                <div key={item.id}>
                                        <ItemCard data={item} />
                                </div>
                            );
                        }
                    })}
                </div>
            </>
        );
    }
};

export default ItemList;