import { useContext } from "react";
import { IncomesContext } from "../Context/Incomes";

const Incomes = () => {

 const incomecontext = useContext(IncomesContext);
 console.log(incomecontext);
 
    


    return (
        <div>
            <h1>Incomes</h1>
        </div>
    )
};
export default Incomes;