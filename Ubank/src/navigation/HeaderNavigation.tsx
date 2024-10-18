import SignUp from "../pages/SignUp/Components/SignUpForm/SignUpForm";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { routerform } from "./Navigation";
import LogIn from "../pages/LogIn/LogIn";
import Authrouters from "./AuthNavegation";

const router = createBrowserRouter([

    
    
    {
      path: "dashboard", 
      element: <Dashboard />,
    },
    ...routerform,
    ...Authrouters,
    



]);

export default router