import { createRoot } from 'react-dom/client'
import { router } from './navigation/HeaderNavigation.tsx';
import { RouterProvider,} from "react-router-dom";
import './index.css'



createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router}/>
  
)