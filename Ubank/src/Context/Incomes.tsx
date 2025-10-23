import { createContext, useEffect, useState } from "react";
import { getUserData } from "../Services/Userdata";

export const IncomesContext = createContext({
    incomesdata: [],
    ExpenseData: [],
    savingsdata: [],
    SavingIndex: 0,
    setSavingIndex: (index: number) => {console.log(index);
    },
    counterindex: () => {},
});




export const IncomesProvider = ({ children }: { children: any }) => {
    const [incomesdata, setIncomes] = useState([]);
    const [ExpenseData, setExpense] = useState([]);
    const [savingsdata, setSavings] = useState([]);
    const [SavingIndex, setSavingIndex] = useState(0);

    useEffect(() => {
        const userData = async () => {
            try {
                const data = await getUserData() as any;
                setIncomes(data.Incomes);
                setExpense(data.Expenses);
                setSavings(data.Savings);
                console.log(data.Savings);
                console.log(data.Incomes);
                console.log(data.Expenses);
                
            } catch (error) {
                console.log(error);
            }
        };
        userData();
        
    }, []);

    const counterindex = () => {
            setSavingIndex(SavingIndex + 1);
        };

    const value = {
        incomesdata,
        ExpenseData,
        savingsdata,
        SavingIndex,
        counterindex,
        setSavingIndex

        };

    return <IncomesContext.Provider value={value}>{children}</IncomesContext.Provider>;
};