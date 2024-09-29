import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FinantialPlan from './pages/FinantialPlan/Components/FinantialPlan.tsx';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Form from './pages/Form/Form.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form />,

  }
  ,{
    path: "/Plan",
    element: <FinantialPlan />,
  },
  
]);

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)