import React from 'react';
import './FinantialPlan.css';
import Card from './Components/cards/Card';
import { useLocation } from 'react-router-dom';


const FinantialPlan = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="financial-plan-container">
      <div className="top-rectangle"></div> {/* Rectángulo negro superior */}

      <div className="content">
        <h1 className="subtitle">Your best financial plan is:</h1>
        <h2 className="<efficient-subtitle">blablablabal</h2> {/* Subtítulo dinámico */}

        <div className="card-container">
          {/* Usar el componente Card y pasarle las props dinámicas */}
          
        {/* Texto adicional */}
        <p className="contact-text">Do you want to create this plan with us?</p>
        <p className="contact-text2">¡Let us send you an email and let’s get in contact!</p>

        {/* Botones */}
        <div className="button-container">
          <div className="button gray-button">Restart</div>
          <div className="button colored-button">Send Email</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FinantialPlan;
