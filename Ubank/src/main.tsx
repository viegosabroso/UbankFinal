import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import './index.css'
import './Clients/firebase.ts' // Importa la configuración de Firebase para inicializarla
import SignUp from './pages/SignUp/Components/SignUpForm/SignUpForm.tsx';



const router = createBrowserRouter([

      {
        path: "/", 
        element: <SignUp />,
      },



]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)