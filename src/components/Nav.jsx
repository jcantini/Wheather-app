import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import sty from './Nav.module.css';
import {Link} from 'react-router-dom'; //De la libreria react-router-dom que cargamos en App, usamos el 
                                       //componente Link

function Nav({onSearch}) { //onSearch lo recibo solo para pasarselo a SearchBar
  return (
    <nav className={sty.nav}>
      <Link to='/'>  {/*permite convertir en un link lo que pongo entre los tag <Link></Link
                      para indicar hacia adonde quiero ir. Los Link son traducidos <a> para
                      probar de ponerle estilo>*/}
          <div>
          </div>   
          <div className={sty.weather}><b>Weather App</b> </div>
      </Link>
      <Link to='/about'>
          <div className={sty.weather}>About</div>
      </Link>
        <div className={sty.scity}>  
          <SearchBar onSearch={onSearch}/>
        </div>
    </nav>
  );
};

export default Nav;
