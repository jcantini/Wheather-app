import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter  as Router} from 'react-router-dom'; //Es para envolver toda la aplicacion con el BrowserRoutes
                                                  //asi puedo usar el Link y el Route

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);