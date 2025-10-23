// no use la libreria para esto ya que no es una grafica de alta complejidad

import React from 'react';
import "./Saving.css";
import img1 from "../../../../assets/support-dollar.webp"

interface ProgressCardProps {
  title: string;
  description: string;
  currentAmount: number;
  goalAmount: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title = "Your saving goal",
  description = "New pair of shoes 👠👠",
  currentAmount = 100000,
  goalAmount = 200000,
}) => {
  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100); // Calcula el porcentaje, máximo de 100%

  return (
    <div className="progress-card">
      <div className="header">
        <div className="icon-title">
          <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="saving-icon" width={19} /></div>
          <h3>{title}</h3>
        </div>
        <h3 className="percentage">{Math.round(progressPercentage)}%</h3>
      </div>
      <p className="description">{description}</p>
      <div className="amounts">
        <span className="current">${currentAmount.toLocaleString()}</span>
        <span className="goal">${goalAmount.toLocaleString()}</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: '#8644DB',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
