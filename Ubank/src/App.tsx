import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Outlet /> {/* Este Outlet renderiza los componentes correspondientes a las rutas */}
    </div>
  );
}

export default App;