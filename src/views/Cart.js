import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

//FORM
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//ALERT
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//CONTEXT
import { useCart, useDispathCart } from '../components/Context'
import CartItems from '../components/CartItems';

const initialState = {
    name: '',
    phone: '',
    mail: ''
};

const Cart = () => {
    const productos = useCart();
    const dispatch = useDispathCart();
    const totalPrice = productos.reduce( (total, b) => total + b.precio * b.cantidad, 0);

    
    const [values, setValues] = useState(initialState);
    const [idCompra, setIdCompra] = useState('');

    const onChange = e => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    };
    const onSubmit = async e => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "compra"), {
            comprador: values,
            productos: productos,
            total: totalPrice,
        });
        setIdCompra(docRef.id);
        setValues(initialState);
    };

    const remove = index => {
        dispatch({ type: 'REMOVE', index});
      };
    
      const clear = () => {
        dispatch({type: 'CLEAR'})
      };
  return (
    <>
        <div id='cartContent'>
            {productos.map( (prod, index) => {
                return (
                <CartItems key={index} producto={prod} remove={remove} index={index} />
                );
            })}
            <h1>Total Price: ${totalPrice}</h1>
            <button onClick={clear}>Clear Cart</button>
        </div>
        <Box
        component="form"
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        >
            <div style={{display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', marginTop: '50px'}}>
                <TextField onChange={onChange} value={values.name} name='name' id="filled-basic" label="Name" variant="filled" />
                <TextField onChange={onChange} value={values.phone} name='phone' id="filled-basic" label="Phone" variant="filled" />
                <TextField onChange={onChange} value={values.mail} name='mail' id="filled-basic" label="Mail" variant="filled" />
                <button>Realizar Compra</button>
            </div>
        </Box>
        {idCompra && (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity='success'>
                    Gracias por su compra! su id de transacción es: {`${idCompra}`}
                </Alert>
		    </Stack>
        )}
    </>
  )
}

export default Cart