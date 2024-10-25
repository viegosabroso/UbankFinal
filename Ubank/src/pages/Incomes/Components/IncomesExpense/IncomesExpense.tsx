
import './IncomesExpenses.css';

interface IncomesExpensesProps {
    incomeAmount?: number;
    expenseAmount?: number;
    incomePercentage?: number;
    expensePercentage?: number;
}

const IncomesExpenses: React.FC<IncomesExpensesProps> = ({
    incomeAmount = 0,
    expenseAmount = 0,
    incomePercentage = 0,
    expensePercentage = 0
}) => (
    <div className="incomes-expenses">
        <div className="header">
            <span role="img" aria-label="dollar">💵</span>
            <h2>Incomes vs Expenses</h2>
        </div>

        <div className="bar income-bar">
            <div className="bar-fill income-fill" style={{ width: `${incomePercentage}%` }}></div>
            <p>Incomes ${incomeAmount.toLocaleString()}</p>
        </div>

        <div className="bar expense-bar">
            <div className="bar-fill expense-fill" style={{ width: `${expensePercentage}%` }}></div>
            <p>Expenses ${expenseAmount.toLocaleString()}</p>
        </div>
    </div>
);

export default IncomesExpenses;
