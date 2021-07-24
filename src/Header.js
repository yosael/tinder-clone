import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://1000marcas.net/wp-content/uploads/2019/12/Tinder-simbolo.jpg"
                alt=""
            />
        </div>
    )
}

export default Header