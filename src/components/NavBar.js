import './NavBar.css'
import Sonic from './logo.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined.js';

const NavBar = () => {

    return (

        <div className='navbar'>
            <div className='imagen'><Sonic /></div>
            <ul>
                <li>Inicio</li>
                <li>Historia</li>
                <li>Contactanos</li>
            </ul>
            <div className='carrito'>
                <ShoppingCartIcon color="success" fontSize="large" />
                <h3>0</h3>
            </div>
        </div>
    );

}

export default NavBar;