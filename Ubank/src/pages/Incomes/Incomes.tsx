import { useEffect, useState } from "react";
import { UseContextIncomes } from "../../Hooks/Usecontext";
import { getUserData, updateUserData } from "../../Services/Userdata";
import Incomescard from "./Components/Incomescard/Incomescard";
import MinorExpense from "./Components/MinorExpense/MinorExpense";




interface IncomesProps {
    IncomeName: string;
    IncomeAmount: number;
    IncomeDate: string;

}

interface IncomesData {
    Userdata: {
        Incomes: IncomesProps[]
    }
}
const Incomes = () => {
    
    const {incomesdata} = UseContextIncomes();


const [incomes, setIncomes] = useState<IncomesProps[]>([]);
const [incomeName, setIncomeName] = useState<string>("");
const [incomeAmount, setIncomeAmount] = useState<number>(0);
const [incomeDate, setIncomeDate] = useState<string>("");

  
 
 
    
 useEffect(() => {
    console.log(incomesdata);
    
    
   setIncomes(incomesdata)


    
}, [incomesdata]);


   
 const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const value = e.target.value;
     console.log(value);
     setIncomeName(value);
     return value;
 }

 const handleupload = () => {
    console.log("upload");
    
    const newIncomes = [...incomes, {
        IncomeName: incomeName,
        IncomeAmount: incomeAmount,
        IncomeDate: incomeDate,
    }]
    setIncomes(newIncomes);
    updateUserData({ Incomes: newIncomes });
    
    
 }
 
 useEffect(() => {
     console.log(incomes);
    }, [incomes]);

  

    return (
        <div>
            <h1>Incomes</h1>
            <div>
                <input type="text" onChange={handleinputChange} />
                <input type="number" onChange={(e) => setIncomeAmount(Number(e.target.value))} />
                <input type="date" onChange={(e) => setIncomeDate(e.target.value)} />
                <button onClick={handleupload}>Submit</button>
            </div>
            { 
                incomes.map((income, index) => (
                    <Incomescard key={index} IncomeTitle={income.IncomeName} IncomeAmount={income.IncomeAmount} IncomeDate={income.IncomeDate} Incomesimg="" />
                ))
            }
            
            <MinorExpense ExpenseAmount={0} ExpenseDate="" ExpenseName="" Expensetype=""/>

           </div>
    )
};
export default Incomes;