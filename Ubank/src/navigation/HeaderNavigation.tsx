import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { routerform } from "./Navigation";
import Authrouters from "./AuthNavegation";
import Incomes from "../pages/Incomes/Incomes";

const router = createBrowserRouter([

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
    ...routerform,
    ...Authrouters,
    



]);

export default router