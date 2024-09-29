import React from 'react';
import '../NavigationButtons/Navigation.css';

const NavigationButtons: React.FC = () => {
    return (
    <div className='buttons-container'>
        <button className='back'>Back</button>
        <button className='next'>Next</button>
    </div>
    );
};

export default NavigationButtons;
