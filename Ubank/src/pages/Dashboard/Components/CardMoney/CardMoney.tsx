import React from 'react';
import './CardMoney.css';

interface BalanceCardProps {
  title: string;
  amount: number;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  imageSrc: string;
  style?: React.CSSProperties;
  className?: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, currency, onCurrencyChange, style, imageSrc, className }) => {
  return (
    <div className={`balance-card ${className}`} style={style}>
      <div className="header">
        <div className='title-icon'>
          <div className="icon"> <img src={imageSrc} alt="img-api" width={20}/></div>
          <h3>{title}</h3>
        </div>
        <div className="dropdown-div">
          <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="COP">COP</option>
          </select>  
        </div>
      </div>
      <div className="amount">
        <h1>{currency} {amount.toLocaleString()}</h1>
      </div>
    </div>
  );
};

export default BalanceCard;
