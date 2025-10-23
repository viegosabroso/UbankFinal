import React, { useState } from 'react';
import { useExchangeRates } from '../../../../Hooks/ApiCurrency';
import BalanceCard from '../CardMoney/CardMoney';
import './CurrencyConverter.css';
import img1 from "../../../../assets/hormiga-icon.webp"
import img2 from "../../../../assets/wallet-icon.webp"
import img3 from "../../../../assets/support-dollar.webp"

interface CurrencyConverterProps {
  totalBalance: number;
  savings: number;
  minorExpenses: number;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ totalBalance, savings, minorExpenses }) => {
  const [currencies, setCurrencies] = useState<{ [key: string]: string }>({
    totalBalance: 'COP',
    savings: 'COP',
    minorExpenses: 'COP',
  });

  const { convertCurrency } = useExchangeRates('COP');

  const handleCurrencyChange = (key: string, newCurrency: string) => {
    setCurrencies((prevCurrencies) => ({ ...prevCurrencies, [key]: newCurrency }));
  };

  return (
    <>
      {/* Primer div para el balance total y savings */}
      <div className="currency-converter">
        <BalanceCard
          imageSrc={img2}
          title="Total Balance"
          amount={convertCurrency(totalBalance, currencies.totalBalance)}
          currency={currencies.totalBalance}
          onCurrencyChange={(currency) => handleCurrencyChange('totalBalance', currency)}
          style={{ backgroundColor: '#ffffff', color: 'black'}}
          className="total-balance"
        />
        <BalanceCard
          imageSrc={img3}
          title="Savings"
          amount={convertCurrency(savings, currencies.savings)}
          currency={currencies.savings}
          onCurrencyChange={(currency) => handleCurrencyChange('savings', currency)}
          style={{ backgroundColor: '#ffffff', color: 'black'}}
          className="savings"
        />
        <BalanceCard
                  imageSrc={img1}
                  title="Minor Expenses"
                  amount={convertCurrency(minorExpenses, currencies.minorExpenses)}
                  currency={currencies.minorExpenses}
                  onCurrencyChange={(currency) => handleCurrencyChange('minorExpenses', currency)}
                  style={{ backgroundColor: '#FFEEDD', color: '#FF5C00', width: '410px'}}
                  className="minor-expenses"
                />
      </div>
    </>
  );
};

export default CurrencyConverter;