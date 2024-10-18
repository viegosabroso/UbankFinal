import SignUp from "../pages/SignUp/Components/SignUpForm/SignUpForm";
import LogIn from "../pages/LogIn/LogIn";

const Authrouters = ([

    {
      path: "/", 
      element: <SignUp />,
    },
    {
      path: "login", 
      element: <LogIn />,
    },
  



]);

export default Authrouters;