import MenuItem from './MenuItem/MenuItem';
import './Sidebar.css';

interface SidebarProps {
  onLogout: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <div className="sidebar">
      
      <div className="logo">
        <h1>UBank</h1>
      </div>

      
      <nav className="menu">
        <ul>
          <MenuItem icon="🟩" text="Dashboard" />
          <MenuItem icon="💵" text="Income and expenses" />
          <MenuItem icon="🏦" text="Savings goals" />
        </ul>
      </nav>

      
      <div className="sign-out">
        <span className="icon">🔗</span>
        <button onClick={onLogout} className="sign-out-button">Sign out</button>
      </div>

      
    </div>
  );
};

export default Sidebar;

