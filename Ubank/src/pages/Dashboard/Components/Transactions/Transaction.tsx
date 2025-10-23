import React from 'react';
import './Transaction.css';
import TransactionItem from './TransactionItem';
import img1 from "../../../../assets/transacciones-icon.webp";

const TransactionList: React.FC = () => {
   //Data quemada directamente dentro del componente para pruebas
  const dummyTransactions: { title: string; date: string; amount: number; type: 'income' | 'expense' }[] = [
     {
       title: 'Part-time Job',
       date: 'Wednesday 12 August 2024',
       amount: 342000,
       type: 'income',
     },
     {
       title: 'Carulla Market',
       date: 'Wednesday 20 August 2024',
       amount: -342000,
       type: 'expense',
     },
     {
       title: 'Monthly Allowance',
       date: 'Wednesday 20 August 2024',
       amount: 342000,
       type: 'income',
     },
     {
         title: 'Monthly Allowance',
         date: 'Wednesday 20 August 2024',
         amount: 342000,
         type: 'income',
       }
  ];

  return (
    <div className="transaction-list">
      <div className="transaction-header">
        <div className="icon" style={{ backgroundColor: '#D7F177' }}> 
          <img src={img1} alt="transactions" width={19}/>
        </div>
        <h2>Your last movements</h2>
      </div>

      {/* Si no hay transacciones, muestra el mensaje */}
      {dummyTransactions.length === 0 ? (
        <p className="empty-message">You have no transactions yet. Start by adding incomes or expenses.</p>
      ) : null}

      {/* Contenedor con Scroll */}
      <div className="transaction-list-scroll">
        {dummyTransactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            title={transaction.title}
            date={transaction.date}
            amount={transaction.amount}
            type={transaction.type}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;


