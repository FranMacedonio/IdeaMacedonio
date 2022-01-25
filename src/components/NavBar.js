import './NavBar.css'
import Sonic from './logo.js';

const NavBar = () => {

    return (

        <div className='navbar'>
            <div className='imagen'><Sonic /></div>
            <ul>
                <li>Inicio</li>
                <li>Historia</li>
                <li>Crear Personaje</li>
            </ul>
        </div>

    );

}

export default NavBar;