import React from 'react';
import './FinantialPlan.css';

const FinantialPlan: React.FC = () => {
  return (
    <div className="financial-plan-container">
      <div className="top-rectangle"></div> {/* Rectángulo negro superior */}
      
      <div className="content">
        <h1 className="subtitle">Your best financial plan is:</h1>
        <h2 className="efficient-subtitle">Efficient</h2>

        <div className="card-container">
          {/* Tarjetas de recomendación */}
          <div className="card">
            <div className="card-number">1</div>
            <div className="card-circle"></div>
            <p className="card-text">
              We recommend our Ubank student credit card with 0 management fee and considerable limits with low interest.
            </p>
          </div>

          <div className="card">
            <div className="card-number">2</div>
            <div className="card-circle"></div>
            <p className="card-text">
              Our Ubank savings account offers competitive interest rates and no monthly fees.
            </p>
          </div>

          <div className="card">
            <div className="card-number">3</div>
            <div className="card-circle"></div>
            <p className="card-text">
              Consider our Ubank investment plan to grow your savings efficiently.
            </p>
          </div>
        </div>

        {/* Texto adicional */}
        <p className="contact-text">
          Do you want to create this plan with us? Let us send you an email and let’s get in contact!
        </p>

        {/* Botones */}
        <div className="button-container">
          <div className="button gray-button">Restart</div>
          <div className="button colored-button">Send Email</div>
        </div>
      </div>
    </div>
  );
};

export default FinantialPlan;
