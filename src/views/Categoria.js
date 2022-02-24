import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import CardComponent from '../components/CardComponent';

const Categoria = () => {

    const [productos, setProductos] = useState([]);

	const categoria = useParams().categoria;

    useEffect(() => {
		const getProductos = async () => {
			const q = query(
				collection(db, 'productos'),
				where('categoria', '==', categoria)
			);
			const array = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				array.push({ ...doc.data(), id: doc.id });
			});
			setProductos(array);
		};
		getProductos();
	}, [categoria]);

    return (
        <div style={{display: 'flex'}}>
        {productos.map( datos => {
            return(
                <Link key={datos.id} to={`/detalles/${datos.id}`}>
                <CardComponent data={datos}/>
                </Link>
            );
        })}
    </div>
    )
}

export default Categoria