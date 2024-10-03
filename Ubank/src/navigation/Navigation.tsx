import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FinantialPlan from "../pages/FinantialPlan/FinantialPlan";
import { lazy, Suspense } from "react";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
const FormPage = lazy(() => import("../pages/Form/Form"));
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/onboarding",
        element: <OnBoarding/>,
    },
    {
      path: "/form",
      element: <Suspense fallback={<div>Loading...</div>}>
          <FormPage />,
        </Suspense>
  
    }
    ,{
      path: "/Plan",
      element: <FinantialPlan />,
      
    },
    {
      path: "*",
      element: <Error />,
    },

    
    
  ]);