import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';
import img1 from "../../../../assets/digramadebarras.webp"

interface IncomeExpenseChartProps {
  title?: string;
  subtitle?: string;
  datachart: {monthYear: string, incomes: number, minorexpenses: number}[]
}


const IncomeExpenseChart: React.FC<IncomeExpenseChartProps> = ({
  title = "Comparing of Incomes and Minor Expenses",
  subtitle = "You can see a comparison of your incomes and minor expenses over the months",
  datachart
}) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="bar-chart" width={17}/></div>
        <h2>{title}</h2>
      </div>
      <p>{subtitle}</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={datachart} margin={{ top: 30, right: 30, left: 20, bottom: -18 }} barSize={16}>
          <XAxis dataKey="monthYear" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }}/>
          <Tooltip />
          <Legend 
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: 'black', fontSize: '13px', fontWeight: "400", marginRight: "10px"}}>
            {value === 'Incomes' ? 'Incomes' : 'Minor expenses'}
            </span>
          )} />
          <Bar dataKey="incomes" fill="#8644DB" name="Incomes" radius={[5, 5, 0, 0]}/>
          <Bar dataKey="minorexpenses" fill="#F4A261" name="Minor expenses" radius={[5, 5, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;
