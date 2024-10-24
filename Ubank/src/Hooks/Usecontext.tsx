import { useContext } from "react";
import { IncomesContext } from "../Context/Incomes";

export const UseContextIncomes = () => {
    const context = useContext(IncomesContext);
    if (!context) {
        throw new Error('Context is empty')
      }
    
      return {
        ...context
    }
    
   


}