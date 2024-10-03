import SignUp from "../pages/SignUp/Components/SignUpForm/SignUpForm";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { routerform } from "./Navigation";
import LogIn from "../pages/LogIn/LogIn";

const router = createBrowserRouter([

    {
      path: "/", 
      element: <SignUp />,
    },
    {
      path: "login", 
      element: <LogIn />,
    },
    {
      path: "dashboard", 
      element: <Dashboard />,
    },
    ...routerform



]);

export default router