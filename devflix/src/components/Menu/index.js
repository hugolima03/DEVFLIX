import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import Button from '../Button'
//componentes feito por eles
//import Footer from '../Footer'
//import { FooterBase } from '../Footer/styles';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src="https://fontmeme.com/permalink/200727/1be538bcbaf3b94a4c5cfa84f3090e42.png" alt="Devflix"></img>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
            
        </nav>
    );
}

export default Menu;