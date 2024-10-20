import { useContext, useEffect, useState } from "react";
import { IncomesContext } from "../Context/Incomes";
import { getUserData, updateUserData } from "../../Services/Userdata";
import Incomescard from "./Components/Incomescard/Incomescard";
import MinorExpense from "./Components/MinorExpense/MinorExpense";



interface IncomesProps {
    IncomeName: string;
    IncomeAmount: number;
    IncomeDate: string;

}

interface IncomesData {
    Incomes: IncomesProps[]
}
const Incomes = () => {

const [incomes, setIncomes] = useState<IncomesProps[]>([]);
const [incomeName, setIncomeName] = useState<string>("");
const [incomeAmount, setIncomeAmount] = useState<number>(0);
const [incomeDate, setIncomeDate] = useState<string>("");

  
 
 
    
 useEffect(() => {
    const fetchData = async () => {
        try{
        const userData = await getUserData() as IncomesData;
            console.log(userData);
            
             
             setIncomes(userData.Incomes);
         
    }catch(error){
        console.error("Error fetching Incomes data:", error);
    }
}
    fetchData();
}, []);


   
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
 const incomecontextt = useContext(IncomesContext);
 console.log(incomecontextt);
 
 useEffect(() => {
     console.log(incomes);
    }, [incomes]);

    const sumincomes = incomes.reduce((acc, curr) => acc + curr.IncomeAmount, 0);
    console.log(sumincomes);
    

    return (
        <div>
            <h1>Incomes</h1>
            <div>
                <input type="text" onChange={handleinputChange} />
                <input type="number" onChange={(e) => setIncomeAmount(Number(e.target.value))} />
                <input type="date" onChange={(e) => setIncomeDate(e.target.value)} />
                <button onClick={handleupload}>Submit</button>
            </div>
            {incomes.length > 0 ? (
                incomes.map((income, index) => (
                    <Incomescard key={index} IncomeTitle={income.IncomeName} IncomeAmount={income.IncomeAmount} IncomeDate={income.IncomeDate} Incomesimg="" />
                )) ) : (
                <p>No incomes available</p>

            )}
            
            <MinorExpense ExpenseAmount={0} ExpenseDate="" ExpenseName="" Expensetype=""/>

           </div>
    )
};
export default Incomes;