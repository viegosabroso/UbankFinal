import './Dashboard.css'
import CurrencyConverter from "./Components/CardMoney/CurrencyConverter";

import IncomeExpenseChart from "./Components/IncExpChart/IncomeExpenseChart";
import ProgressCard from "./Components/SavingsProgress/SavingProgress";
import UseDashboard from '../../Hooks/DashboardHooks';
import { UseIncomes } from '../../Hooks/Useincomes';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import TransactionList from './Components/Transactions/Transaction';
import StatisticsCard from './Components/Statistics/StatisticsCard';

interface DatachartType {
    monthYear: string;
    incomes: number;
    minorexpenses: number;
}
// data quemada para prueba de la gráfica circular
const sampleData = [
  { name: 'Food', value: 200000, color: '#D7F177' },
  { name: 'Transportation', value: 150000, color: '#87CBB9' },
  { name: 'Entertainment', value: 100000, color: '#8B65D3' },
  { name: 'Rent', value: 250000, color: '#FFA559' },
];
const Dashboard: React.FC = () => {
  const { incomes,minorExpenses ,TotalIncomes, TotalMinorExpenses} = UseIncomes()
  const { username, handleLogout } = UseDashboard() as { username: string; handleLogout: () => Promise<void> };
  const [datachart, setdatachart] = useState<DatachartType[]>([])

const getMonthlyIncomes = () => {
    const monthlyTotals: { [key: string]: number } = {};
    const minorExpenseTotals: { [key: string]: number } = {};

    // Calculate monthly income totals
    incomes.forEach(income => {
        const date = new Date(income.IncomeDate);
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthYear = `${year}-${month}`; 

        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = 0;
        }

        monthlyTotals[monthYear] += income.IncomeAmount;
    });
console.log(minorExpenses);

    // Calculate minor expense totals
    minorExpenses.forEach(expense  => {
        const date = new Date(expense.ExpensesDate);
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthYear = `${year}-${month}`; // Match format used in monthlyTotals

        if (!minorExpenseTotals[monthYear]) {
            minorExpenseTotals[monthYear] = 0;
        }

        // Accumulate the expense amount
        minorExpenseTotals[monthYear] += expense.ExpensesAmount;
        console.log(minorExpenseTotals[monthYear]);
        
    });

    // Set the data chart with totals
    setdatachart(Object.entries(monthlyTotals).map(([key, value]) => ({
        monthYear: key,
        incomes: value,
        minorexpenses: minorExpenseTotals[key] || 0 
    }
  
  )));

    console.log('Data to be set in chart:', Object.entries(monthlyTotals).map(([key, value]) => ({
      monthYear: key,
      incomes: value,
      minorexpenses: minorExpenseTotals 
  })));

}


  useEffect(() => {
    console.log(getMonthlyIncomes());
    console.log(minorExpenses);
    console.log(datachart);
    
    
  }, [incomes,minorExpenses])
      
  return (
    <div className="dashboard-content">
      <Sidebar className="sidebar" onLogout={handleLogout} />
      <section className='info-section'>
        <div className='text-content'>
          <h2 className="main-title">Welcome!, {username}</h2>
          <p>Detailed overview of your finantial situation</p>
        </div>
        <div className='body-content'>
          <CurrencyConverter totalBalance={TotalIncomes} savings={100000} minorExpenses={TotalMinorExpenses} />
            <div className='dash-progress-charts'>
            <IncomeExpenseChart datachart={datachart.slice(1)}/>  
            <ProgressCard 
                  title="Your saving goal" 
                  description="New pair of shoes 👠👠" 
                  currentAmount={100000} 
                  goalAmount={200000} 
                />
            </div>
            <div className='last-dash-container'>
              <TransactionList></TransactionList>
              <StatisticsCard 
                title="Statistics" 
                data={sampleData} 
                totalAmount={700000} 
                />
            </div>
          </div>
        </section>
      

    </div>
  );
};

export default Dashboard;


