interface MinorExpenseProps {
    Expensetype : string,
    ExpenseName : string,
    ExpenseDate : string,
    ExpenseAmount : number

}

const MinorExpense = ({Expensetype, ExpenseName, ExpenseDate, ExpenseAmount} : MinorExpenseProps) => {
    return(
        <div>
            <img src ="" alt = "" />
            <div>
        <h2>{Expensetype}</h2>
        <p>{ExpenseName}</p>
        <p>{ExpenseDate}</p>


        </div>
        <div>  
            <h3>{ExpenseAmount}</h3>
            </div>
        </div>
    )


}
export default MinorExpense;