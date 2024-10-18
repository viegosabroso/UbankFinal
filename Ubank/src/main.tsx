import { createRoot } from 'react-dom/client'

import { RouterProvider,} from "react-router-dom";
import './index.css';

import router from './navigation/HeaderNavigation.tsx';
import { Toaster } from 'react-hot-toast';

import './Clients/firebase.ts'
import './index.css'
import { IncomesProvider } from './pages/Context/Incomes.tsx';

createRoot(document.getElementById('root')!).render(
    <>
<IncomesProvider>

    <RouterProvider router={router} /><Toaster />
</IncomesProvider>
    </> 
)