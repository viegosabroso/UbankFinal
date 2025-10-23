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
            
            <div className="CircleImage" >
            <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAntExpense.png?alt=media&token=9026bd00-c6f6-4ede-86ef-1254301a00f1" alt="Circularicon" className="CircleImage1"/>
            </div>
            <div className="details">
                <h2>{Expensetype}</h2>
                <p>{ExpenseName}</p>
                <p>{ExpenseDate}</p>
            </div>
            <div className="amount">
                <h3>${ExpenseAmount}</h3>
            </div>
        </div>
    );
}

export default MinorExpense;
