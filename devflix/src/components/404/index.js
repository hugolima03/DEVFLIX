//import {div} from './styles';
import React from 'react';
import './styles.css';

function Erro404() {
    return (
        <div id="notfound">
		    <div className="notfound">
			    <div className="notfound-404">
				    <h1>404</h1>
				    <h2>Vish deu erro</h2>
			    </div>
			    <a href="/">Voltar ao início</a>
		    </div>
	    </div>
    );
}

export default Erro404;