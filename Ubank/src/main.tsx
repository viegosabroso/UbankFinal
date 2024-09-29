import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './index.css'
import './Clients/firebase.ts' // Importa la configuración de Firebase para inicializarla
import SignUp from './pages/SignUp/Components/SignUpForm/SignUpForm.tsx';
import LogIn from './pages/LogIn/LogIn.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';




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



]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)