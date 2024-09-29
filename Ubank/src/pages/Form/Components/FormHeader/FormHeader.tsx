import React from 'react';
import img from '../../../../assets/form_logo.png';
import '../FormHeader/Header.css';

const Header: React.FC = () => {
    return (
    <header>
        <img className= "header" src={img} alt="Ubank" />
    </header>
    );
};

export default Header;
