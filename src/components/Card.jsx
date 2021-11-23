import React from 'react';
import {Link} from 'react-router-dom';
import sty from './Card.module.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={sty.container}>
        <div className={`${sty.card} ${name==='Buenos Aires' ? sty.cardc1 : sty.cardc2}`}>
            <button onClick={onClose} className={`${sty.botc1} ${sty.botc2}`}>X</button>
            <Link to={`/ciudad/${id}`} >  {/*Link a /ciudad y dentro de esa ruta a la ciudad con ese id
                                        el $ es porque uso una concatenacion usando ``*/}
                 <h5 className={sty.citycolor}>{name}</h5>
            </Link>
            <div className={sty.info}>
              <div>
                <p>Min</p>
                <p>{min}°</p>
              </div>
              <div>
                <p>Max</p>
                <p>{max}°</p>
              </div>
              <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
        </div>
      </div>
    );
};
