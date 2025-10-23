
interface SavingDetailedProps {
    savingtitle: string;
    savingamount: number;
    
    savingFrequency: string;
    savingsdone:[ {
        amount: number;
        date: string;
    }]// Change here to allow multiple savings
    savedtotal: number;
}

const SavingDetailed = ({
    savingtitle,
    savingamount,
   
    savingFrequency,
    savingsdone = [{amount: 0, date: ''}],
    savedtotal
}: SavingDetailedProps) => {
    return (
        <div>
            <h2>{savingtitle}</h2>
            <p>Amount: {savingamount}</p>
            
            <p>Frequency: {savingFrequency}</p>
            <div className="savings-done">
                <h2>Payments Made:{savingsdone.length - 1}</h2>

            {
                savingsdone.slice(1).map((saving, index) => (
                    <div key={index}>
                        <p>Savings: {saving.amount}</p>
                        <p>Date: {saving.date}</p>
                    </div>
                ))
            }
            <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAddbutton.png?alt=media&token=54634ae9-a33a-4abe-8827-f698b40714c4" alt=""  height={50} width={50} />
            </div>
            <p>Saved Total: {savedtotal}</p>
        </div>
    )
}
export default SavingDetailed;