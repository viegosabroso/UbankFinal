
interface IncomescardProps {
    IncomeTitle: string;
  IncomeAmount: number;
  IncomeDate: string;
  Incomesimg: string;
}

const Incomescard = ({IncomeTitle, IncomeAmount, IncomeDate, Incomesimg}:IncomescardProps) => {
    return (
    <>
    <div>
        <img src={Incomesimg} alt="" />
        <h2>{IncomeTitle}</h2>
        <h3>{IncomeAmount} $</h3>
        <div>
            <h3>{IncomeDate}</h3>
        </div>
    </div>
    </>
  );
};


export default Incomescard;