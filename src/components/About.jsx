import React from 'react';
import {Link} from 'react-router-dom';
import sty from './About.module.css';

export default function About({props}) {
    return (
        <div className={sty.container}>
          <div className={sty.about}>
            <Link to={`/`} >
               <div className={sty.botcontainer} >
                <button className={`${sty.botc1} ${sty.botc2}`}>X</button>
               </div> 
            </Link>    
              <div><b>Weather Single Page App </b></div>
              <hr></hr>
              <div>Author: Jorge Cantini</div>
              <hr></hr>
              <div>Tools used: React - React Router - CSS Modules</div>
              <div>Contact info:</div>
              <div>jorge.cantini@gmail.com</div>
              <div>www.linkedin.com/in/jorge-cantini</div>
              <hr></hr>   
          </div>
        </div>  
    )
}