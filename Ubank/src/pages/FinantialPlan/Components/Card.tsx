import React from 'react';
import './Card.css';

interface CardProps {
  number: number;
  image?: string;  // Prop opcional para reemplazar el círculo con una imagen
  text: string;
}

const Card: React.FC<CardProps> = ({ number, image, text }) => {
  return (
    <div className="card">
      <div className="card-number">{number}</div>
      {/* Si hay una imagen, mostrarla; de lo contrario, mostrar el círculo */}
      {image ? (
        <img src={image} alt="Card visual" className="card-image" />
      ) : (
        <div className="card-circle"></div>
      )}
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
