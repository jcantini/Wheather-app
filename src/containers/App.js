import React, { useState } from 'react'; //Importo useState para crear un estado que me permita 
                                         //mantener un array con la lista de cuidades buscadas
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY

  function onSearch(ciudad) { 
    //Llamado a la API del clima con fetch que es asincronico. fetch se va a quedar esperando la respuesta
    //que viene en formato json. Con los .then indico que hacer cuando obtenemos la respuesta.
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json()) //Cuando llega la respuesta en formato json, esta funcion la transforma a JS
                           //y se lo pasa a la intrucion siguiente.
      .then((recurso) => {
        if(recurso.main !== undefined){ //Si encontro a la ciudad la agrego al array. Sino mando un alert
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          }; 
          //Veo si ya no tengo esta ciudad en el estado (array 'cities')
          let cityexists = false;
          for(let i=0;i<cities.length;i++) {
            if(cities[i].id === ciudad.id) cityexists = true
          }
          if(!cityexists) {
             setCities(oldCities => [...oldCities, ciudad]);
          } else {
            alert(`La ciudad ${ciudad.name} ya esta cargada`)
          }   
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  
  function onClose(id) {
    ////elimino la ciudad que fue cerrada. Usando filter Le paso el array de ciudades como parametro
    setCities(oldCities => oldCities.filter(c => c.id !== id)); 
  }

  function onFilter(ciudadId) {
  //Esta funcion recibe el id de la ciudad, va a array de ciudades y filtra solo la ciudad que machea 
  //con ese id. Hago un parsInt xq el id que devuelve match llega como string ya q es parte de una url. 
  //El filter me devuelve un array de 1 sola posicion  [0]
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  //En lugar de filter puedo usar let ciudad = cities.find(c => c.id === parseInt(ciudadId));}, la 
  //diferencia es que find no devuelve un array sino directamenta un string con la ciudad
    if(ciudad.length > 0) {
        return ciudad[0]; //porque filter devuelve un array y como solo va a encontrar 1 city estara en [0]
    } else {
        return null;
    }
  }
  
  return (
    <div className="App">
      {/*Cuando tengo que llamar a un componente al cual no necesito pasarle props lo llamo con component.
        Si le tengo que pasar props lo llamo con render.*/}
      <Route path="/" render={() => <Nav onSearch={onSearch}/> }/> {/* no puedo usar component porque necesito
                                                                    pasar un parametro al complemento */}
      <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose}/>}/>
      <Route exact path="/about" component={About}/>
      <Route path="/ciudad/:idCiudad" render={({match}) => <Ciudad city={onFilter(match.params.idCiudad)}/>}/>
      {/*Uso render porque tengo que pasarle una propiedad al componente. 
      El match lo uso cuando tengo que acceder a variables que vienen en la url. En este caso el id de la ciudad. 
      Ya tengo la funcion onFilter que me filtra esa ciudad. 
      Si quiero pasar una funcion para que el hijo la ejecute tengo que pasarla sin (match.params.idCiudad), 
      directamente le paso {onfilter} para que el hijo reciba la funcion y la ejecute como susece en la linea
      del render de Cards. 
      Asi como esta definida en esta linea, la estoy ejecutando en el momento. La funcion onFilter me devuelve 
      un objeto con la Ciudad que estoy buscando y ese objeto con la info de la ciudad se le paso al componente 
      Ciudad */}
      <hr/>
    </div>
  );
}

export default App;

{/* <Route path="/ejemplo" render={() => <Ejemplo nombre="Jorge" apellido="Cantini"/>} />
    En este caso quiero pasarle valores al complemento Ejemplo. Esto se hace usando render y pasandole una 
    funcion donde defino las propiedades que le quiero pasar. Si las propiedades son valores fijos que los puedo 
    escribir directamente como en este ejemplo, no necesito pasarle un parametro a la funcion. Si vienen de una 
    variable, los debo pasar como parametros de la funcion.
    Render No pasa en forma automatica las propiedades (match, history y location) que si pasa component, las 
    tengo que pasar manualmente.
    <Route path="/about/:id" render={({match}) => <About nombre="Jorge" id={match}/>} />*
    si agrego :id indico con : que id va a ser un parametro a observar en la ruta. Por ej si escribo en la 
    ruta ...//:5 si miro con un console.log, en match/params recibo el 5. Observar como lo estoy pasando
    y como hay que recibirlo en el componente About.
    Si quiero pasarle mas de 1 parametro:
    <Route path="/about/:id/:type" render={({match}) => <About nombre="Jorge" id={match}/>}
    <Route path="/ciudad/:ciudadId" render={({match}) => <Mostrar match={match}/>} />  */}
