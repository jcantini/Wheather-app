import React from 'react';
import sty from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className={sty.cards}>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)} //le paso la funcion para eliminar la ciudad del array
          id={c.id}
        /> )}
    </div>
  );
}
