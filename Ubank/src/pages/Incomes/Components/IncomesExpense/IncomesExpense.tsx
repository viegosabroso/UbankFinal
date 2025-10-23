import './IncomesExpense.css';
import img1 from "../../../../assets/icon-income.webp"

import { BarChart, Bar} from 'recharts';

interface IncomesExpensesProps {
    incomeAmount?: number;
    expenseAmount?: number;
    incomePercentage?: number;
    expensePercentage?: number;
}

const IncomesExpenses: React.FC<IncomesExpensesProps> = ({
    incomeAmount = 0,
    expenseAmount = 0,

}) => (
    <div className="incomes-expenses">
        <div className="header-incomesexpenses">
            <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="bar-chart" width={13}/></div>
            <h2>Incomes vs Expenses</h2>
        </div>

        <div className="incomebarchart">
        <BarChart width={180} height={200} 
        data={[
            { name: 'Income', Income: incomeAmount },
            { name: 'Expense', Expense: expenseAmount },
        ]} 
        barCategoryGap="90%" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
        
          
            <Bar dataKey={'Income'} fill='#D7F177' radius={[7, 7, 0, 0]} />
            <Bar dataKey={'Expense'} fill='#eFd5D2' radius={[7, 7, 0, 0]} />
        </BarChart>
        </div>

        <div className="incomesexpenses-info">
            <div className="incomesexpenses-info-container">
                
            <div className="rectangle-incomes" ></div>
            <div className='leyenda'>
                <p id='incomes-info'>Income:</p>
                <p><strong>${incomeAmount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} </strong></p>
            </div>
            </div>

            <div className="incomesexpenses-info-container">
            <div className="rectangle-expenses" ></div>
            <div className='leyenda2'>
                <p id='expenses-info'>Expense:</p>
                <p><strong>${expenseAmount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} </strong></p>
            </div>
            
            </div>
        </div>

        
    </div>
);

export default IncomesExpenses;
