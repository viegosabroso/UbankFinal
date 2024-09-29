import React from 'react';
import './Components/OnBoarding.css';

const OnBoarding: React.FC = () => {
  return (
    <div className="flex-container"> {/* Nuevo contenedor para la alineación */}
      <div className="onboarding-container">
        <div className="top-rectangle"></div> {/* Rectángulo negro superior */}
        
        <div className="content">
          <div className="image-placeholder"></div> {/* Imagen */}
          
          <h1 className="subtitle">Discover your best financial plan</h1>
          
          <p className="body-text">
            Whether you're a student without income, with savings, or managing monthly payments, we'll help you find the best way to manage your money. Start now and build your financial future!
          </p>
          
          <button className="cta-button">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default OnBoarding;
