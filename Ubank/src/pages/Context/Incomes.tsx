import { createContext, useState } from "react";




export const IncomesContext = createContext({
    Incomes: [],
    Expenses: [],
    SavingGoal:[],
    setIncomes: (incomes: any) => {},
    setExpenses: (expenses: any) => {},
    setSavingGoal: (savingGoal: any) => {}

})

export const IncomesProvider = ({ children }: any) => {
    const [Incomes, setIncomes] = useState([]);
    const [Expenses, setExpenses] = useState([]);
    const [SavingGoal, setSavingGoal] = useState([]);

    const value = {
        Incomes,
        Expenses,
        SavingGoal,
        setIncomes,
        setExpenses,
        setSavingGoal
    }

    return <IncomesContext.Provider value={value}>{children}</IncomesContext.Provider>
}


