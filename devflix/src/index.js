import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Erro404 from './components/404';
import { 
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
  	  <React.StrictMode>
  	    <Route path="/" component={App} exact/>
        <Route component={Erro404} />
  	  </React.StrictMode>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);