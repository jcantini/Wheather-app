import React from "react";
import {Link} from 'react-router-dom';
import sty from './Ciudad.module.css';

export default function Ciudad({city}) {
// pregunto 1ero si no me llega una ciudad indefinida. 
 if(!city) {
      return alert(`Error en la ciudad recibida: ${city}`)
 } 
 return (
        <div className={sty.container}>
                <div className={sty.ciudad}>
                    <Link to={`/`} >
                     <div className={sty.botcontainer} >
                        <button className={`${sty.botc1} ${sty.botc2}`}>X</button>
                     </div> 
                    </Link>    
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                        <hr/>
                    </div>
            </div>
        </div>
    )
}