import { createRoot } from 'react-dom/client'
import { router } from './navigation/Navigation.tsx';
import { RouterProvider,} from "react-router-dom";
import './index.css';


import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './navigation/HeaderNavigation.tsx';
import './Clients/firebase.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={router}/>

)