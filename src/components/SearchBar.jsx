import React, { useState } from "react";
import sty from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); //Uso este Hook para tener una variable que me permita capturar la
                                        //ciudad ingresada.
  return (
    <form className={sty.container} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city); //Genero un evento que se lo paso a Nav, quien a su vez se lo sube a App para 
                      //ejecutarlo.
      setCity(''); //Blanqueo el campo de input
    }}>
      <input className={sty.input}
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={sty.bot} type="submit" value="Search" />
    </form>
  );
}

//El 1er input: conecto el estado (city) con el input para que tengan el mismo valor. Entonces al value del 
//input le paso el valor de mi estado (city). Ademas le seteo un EventListener del tipo onchange para
//que cuando se produzca un cambio en el input invoque a la funsion setCity pasandole lo que actualmente
//tiene escrito (e.target.value) 'e' indica el evento que lo disparo, 'target' indica quien lo disparo y 
//.value tiene el valor. De esta forma siempre tengo el valor de city actualizado con lo que esta escrito 
//en el input.
//El 2do input: tiene type='sumbit' para crear un boton que cuando le doy click, me dispara un evento del 
//tipo submit. Lo que esta haciendo el form con la propiedad onSubmit es capturar ese evento y ejecutar 
//onSearch (que recibe de props) para la ciudad solicitada.
