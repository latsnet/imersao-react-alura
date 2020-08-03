import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="3DFlix Logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;