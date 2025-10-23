import { useState, useEffect } from 'react';

interface CurrencyData {
  rates: { [key: string]: number };
}

export const useExchangeRates = (baseCurrency: string) => {
  const [exchangeRates, setExchangeRates] = useState<CurrencyData | null>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data: CurrencyData = await response.json();
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const convertCurrency = (amount: number, targetCurrency: string): number => {
    if (exchangeRates && exchangeRates.rates[targetCurrency]) {
      return amount * exchangeRates.rates[targetCurrency];
    }
    return amount;
  };

  return { convertCurrency, exchangeRates };
};
