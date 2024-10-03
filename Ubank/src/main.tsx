import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './navigation/HeaderNavigation.tsx';
import './Clients/firebase.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Toaster /> 
  </StrictMode>
)