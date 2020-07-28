import React from 'react';
import {FooterBase} from './styles';

function Footer() {
    return (
        <FooterBase>
            <a href="https://www.instagram.com/hugulima_/">
                <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt=""></img>
            </a>
            <p>
                Orgulhosamente criado por 
                { '  ' }
                <a href="https://www.instagram.com/hugulima_/" target="_blank" rel="noopener noreferrer">
                    Hugo Lima.
                </a>
            </p>
        </FooterBase>
    );
}

export default Footer;