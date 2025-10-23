import './IncomesMinorexpense.css';
import img1 from "../../../../assets/icon-income.webp"

import { BarChart, Bar} from 'recharts';

interface IncomesExpensesProps {
    incomeAmount?: number;
    minorexpense?: number;
    incomePercentage?: number;
    expensePercentage?: number;
}

const IncomesExpenses: React.FC<IncomesExpensesProps> = ({
    incomeAmount = 0,
    minorexpense = 0,

}) => (
    <div className="incomes-expenses">
        <div className="header-incomesexpenses">
        <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="bar-chart" width={13}/></div>
            <h2>Incomes vs Minor expenses</h2>
        </div>

        <div className="incomebarchart">
        <BarChart width={190} height={200} 
        data={[
            { name: 'Income', Income: incomeAmount },
            { name: 'Expense', Expense: minorexpense },
        ]} 
        barCategoryGap="90%" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
            <Bar dataKey={'Income'} fill='#D7F177' radius={[7, 7, 0, 0]} />
            <Bar dataKey={'Expense'} fill='##FF7008' radius={[7,7, 0, 0]} />
        </BarChart>
        </div>

        <div className="incomesexpenses-info">
            <div className="incomesexpenses-info-container"> 
            <div className="rectangle-incomes" ></div>
            <div className='leyenda2'>
                <p id='incomes-info'>Income:</p>
                <p><strong>${incomeAmount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} </strong></p>
            </div>
            
            </div>
            <div className="incomesexpenses-info-container">
                <div className="rectangle-expenses2" ></div>
                <div className='leyenda'>
                    <p id='expenses-info'>M. Expense </p>
                    <p><strong> ${minorexpense.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</strong> </p>
                </div>
            </div>
        </div>

        
    </div>
);

export default IncomesExpenses;
