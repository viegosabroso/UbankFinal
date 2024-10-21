import './MinorExpense.css';

interface MinorExpenseProps {
    Expensetype: string;
    ExpenseName: string;
    ExpenseDate: string;
    ExpenseAmount: number;
}

const MinorExpense = ({ Expensetype, ExpenseName, ExpenseDate, ExpenseAmount }: MinorExpenseProps) => {
    return (
        <div className="minor-expense">
            <img src="" alt="Circular icon" />
            <div className="details">
                <h2>{Expensetype}</h2>
                <p>{ExpenseName}</p>
                <p>{ExpenseDate}</p>
            </div>
            <div className="amount">
                <h3>{ExpenseAmount}</h3>
            </div>
        </div>
    );
}

export default MinorExpense;
