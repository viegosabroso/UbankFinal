import React from 'react';
import './Card.css';

interface CardProps {
  number: number;
  imageSrc?: string;  // Prop opcional para la imagen de la tarjeta
  text: string;
}

const Card: React.FC<CardProps> = ({ number, imageSrc, text }) => {
  return (
    <div className="card">
      <div className="card-number">{number}</div>

      {/* Mostrar la imagen si está disponible */}
      {imageSrc && (
        <img src={imageSrc} alt={`Image for card ${number}`} className="card-image" />
      )}

      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;

