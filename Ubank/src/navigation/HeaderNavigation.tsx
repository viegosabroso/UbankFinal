import { createHashRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { routerform } from "./Navigation";
import Authrouters from "./AuthNavegation";
import Incomes from "../pages/Incomes/Incomes";
import SavingsGoals from "../pages/Savings/Savings";
import SavingsDetail from "../pages/SavingsDetail/SavingsDetail";


const router = createHashRouter([

    {
      path: "Incomes",
      element:
 

        <Incomes />
 
      ,
        
      
        
    },
    
    {
      path: "dashboard", 
      element: 
      
    
        <Dashboard />
     
      
          ,
    },

    {
      path: "savings-goals",
      element: <SavingsGoals />,
    },

    {
        path: "SavingsDetail/:id",
        element: <SavingsDetail />
    },
    ...routerform,
    ...Authrouters,
    



]);

export default router