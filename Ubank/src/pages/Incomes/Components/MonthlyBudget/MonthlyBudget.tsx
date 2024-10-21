import './MonthlyBudget.css';

interface MonthlyBudgetProps {
    budgetAmount: number;
    expensesAmount: number;
    minorExpensesAmount: number;
}

const MonthlyBudget = ({ budgetAmount, expensesAmount, minorExpensesAmount }: MonthlyBudgetProps) => {
    const percentageExpenses = ((expensesAmount / budgetAmount) * 100).toFixed(0);
    const percentageMinorExpenses = ((minorExpensesAmount / budgetAmount) * 100).toFixed(0);

    return (
        <div className="monthly-budget">
            <h2>Monthly Budget</h2>
            <div className="circular-chart">
                <div className="circle blue"></div> {/* Placeholder for the chart */}
            </div>
            <h3>{`$${budgetAmount.toLocaleString()}`}</h3>
            <div className="expenses-summary">
                <p>Expenses: {`$${expensesAmount.toLocaleString()} • ${percentageExpenses}%`}</p>
                <p>Minor expenses: {`$${minorExpensesAmount.toLocaleString()} • ${percentageMinorExpenses}%`}</p>
            </div>
        </div>
    );
}

export default MonthlyBudget;
