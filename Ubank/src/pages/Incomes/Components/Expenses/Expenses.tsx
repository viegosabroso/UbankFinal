
import './Expensescard.css'

interface ExpensescardProps {
    ExpensesTitle: string;
  ExpensesAmount: number;
  ExpensesDate: string;
  Expensesimg: string;
  ExpensesType: string;
}

const Expensescard = ({ExpensesTitle, ExpensesAmount, ExpensesDate, Expensesimg,ExpensesType}:ExpensescardProps) => {
    return (
    <>
    <div id='Expensescards'>
      <div id='row-Expensescard'>
        <img src={Expensesimg} alt="" height={45} width={45} />
        <div id='Expensescard-details'>
        <p> {ExpensesType}</p>
        <p id='Expensescard-title'>{ExpensesTitle}</p>
        <h3>{ExpensesDate}</h3>
      </div>
        </div>
        <div id='Expensescard-date'>
          <h3 id='Expensescard-amount'>{ExpensesAmount} $</h3>   
        </div>
    </div>
    </>
  );
};


export default Expensescard;