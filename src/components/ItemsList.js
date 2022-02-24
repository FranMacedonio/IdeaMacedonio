import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

//COMPONENTES
import CardComponent from './CardComponent';

// FIREBASE - FIRESTORE
import { db } from '../firebase'
import { collection, query, getDocs } from 'firebase/firestore';

const ItemsList = () => {

    const [productos, setProductos] = useState([]);

    console.log('productos ', productos);

    useEffect(() => {
        const getProductos = async () => {
        const array = [];
        const q = query(collection(db, 'productos'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( doc => {
            array.push({...doc.data(), id: doc.id});
        });
        setProductos(array);
        };
        getProductos();
    }, []);

  return (
    <>
        {productos.map( datos => {
            return(
                <Link key={datos.id} to={`/detalles/${datos.id}`}>
                <CardComponent data={datos}/>
                </Link>
            );
        })}
    </>
  )
}

export default ItemsList;