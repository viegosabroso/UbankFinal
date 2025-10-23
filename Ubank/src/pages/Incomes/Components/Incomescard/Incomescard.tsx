
import './Incomescard.css'

interface IncomescardProps {
    IncomeTitle: string;
  IncomeAmount: number;
  IncomeDate: string;
  Incomesimg: string;
}

const Incomescard = ({IncomeTitle, IncomeAmount, IncomeDate, Incomesimg}:IncomescardProps) => {
    return (
    <>
    <div id='incomescards'>
      <div id='row-incomescard'>
        <img src={Incomesimg} alt="income-img" height={39} width={39} />
        <div id='incomescard-details'>

        <p id='incomescard-title'>{IncomeTitle}</p>
        <h3 id='incomescard-amount'> ${IncomeAmount.toLocaleString('en-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h3>
      </div>
        </div>
        <div id='incomescard-date'>
            <h3>{IncomeDate}</h3>
        </div>
    </div>
    </>
  );
};


export default Incomescard;