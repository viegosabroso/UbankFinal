import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import './MenuItem.css';

interface MenuItemProps {
  iconSrc: string;
  iconHoverSrc: string;
  text: string;
  to: string;
  active?: boolean;
  onClick?: () => void; 
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  iconSrc, 
  iconHoverSrc, 
  text, 
  to, 
  active = false, 
  onClick 
}) => {
  const iconRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      iconRef.current.src = iconHoverSrc;
    }
  };

  const handleMouseLeave = () => {
    if (iconRef.current) {
      iconRef.current.src = iconSrc;
    }
  };

  return (
    <li className={`menu-item ${active ? 'active' : ''}`}>
      <Link 
        to={to} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onClick={onClick} 
      >
        <img 
          ref={iconRef}
          src={iconSrc} 
          alt={`${text} icon`} 
          className="icon" 
        />
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;


