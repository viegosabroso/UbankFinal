import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { routerform } from "./Navigation";
import Authrouters from "./AuthNavegation";
import Incomes from "../pages/Incomes/Incomes";
import { IncomesProvider } from "../pages/Context/Incomes";
const router = createBrowserRouter([

    {
      path: "Incomes",
      element:
      <IncomesProvider>
        <Incomes />,
      </IncomesProvider>
        
    },
    
    {
      path: "dashboard", 
      element: <Dashboard />,
    },
    ...routerform,
    ...Authrouters,
    



]);

export default router