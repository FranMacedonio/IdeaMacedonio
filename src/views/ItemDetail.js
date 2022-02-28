import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../firebase'
import CardComponent from '../components/CardComponent';


const ItemDetail = () => {
    const [producto, setProducto] = useState([]);

    const id = useParams().id;

    useEffect(() => {
        const getProducto = async () => {
            const q = query(
                collection(db, 'productos'),
                where(documentId(), '==', id)
            );
            const array = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach( doc => {
                array.push({...doc.data(), id: doc.id});
            })
            setProducto(array);
        }
        getProducto();
    }, [id]);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {producto.map( datos => {
            return(
                <CardComponent data={datos} key={datos.id}/>
            );
        })}
    </div>
  )
}

export default ItemDetail