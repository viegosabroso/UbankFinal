import { createRoot } from 'react-dom/client'

import { RouterProvider,} from "react-router-dom";
import './index.css';

import router from './navigation/HeaderNavigation.tsx';
import { Toaster } from 'react-hot-toast';

import './Clients/firebase.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <>
    <RouterProvider router={router}/> <Toaster />
    </>
  

)