import React from 'react';
import './FinantialPlan.css';
import Card from './Card';

interface FinantialPlanProps {
  efficientSubtitle: string;
}

const FinantialPlan: React.FC<FinantialPlanProps> = ({ efficientSubtitle }) => {
  return (
    <div className="financial-plan-container">
      <div className="top-rectangle"></div> {/* Rectángulo negro superior */}

      <div className="content">
        <h1 className="subtitle">Your best financial plan is:</h1>
        <h2 className="efficient-subtitle">{efficientSubtitle}</h2> {/* Subtítulo dinámico */}

        <div className="card-container">
          {/* Usar el componente Card y pasarle las props dinámicas */}
          <Card
            number={1}
            text="We recommend our Ubank student credit card with 0 management fee and considerable limits with low interest."
          />
          <Card
            number={2}
            text="Set budgets and manage your expenses using lists. With your Ubank app, we can help you!"
          />
          <Card
            number={3}
            text="Consider our Ubank investment plan to grow your savings efficiently."
          />
        </div>

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
  );
};

export default FinantialPlan;
