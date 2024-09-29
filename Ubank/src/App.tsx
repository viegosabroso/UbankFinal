import { Outlet } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet /> {/* Este Outlet renderiza los componentes correspondientes a las rutas */}
    </div>
  );
}

export default App;