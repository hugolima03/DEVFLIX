//import ButtonLink from './components/ButtonLink';
import React from 'react';
import './menu.css';
import Button from '../Button'
//componentes feito por eles
import Footer from '../Footer'
import { FooterBase } from '../Footer/styles';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src="https://fontmeme.com/permalink/200727/1be538bcbaf3b94a4c5cfa84f3090e42.png" alt="Devflix"></img>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
            
        </nav>
    );
}

export default Menu;