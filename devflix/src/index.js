import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Erro404 from './pages/404/';
import CadastroVideo from './pages/cadastro/Video/';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
  	    <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video/" component={CadastroVideo} />
        <Route path="/cadastro/categoria/" component={CadastroCategoria} />
        <Route component={Erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);