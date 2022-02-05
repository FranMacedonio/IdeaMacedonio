import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import React, {useState, useEffect} from 'react'

function App() {
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 2000)
  })
  
  return (
    <>
      <NavBar />
      <div className='items'>
        {cargando ? <p>Cargando..</p> : <ItemDetailContainer />}
      </div>
    </>
  );
}

export default App;