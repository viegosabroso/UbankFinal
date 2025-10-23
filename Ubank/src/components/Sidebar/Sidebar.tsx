import MenuItem from './MenuItem/MenuItem';
import './Sidebar.css';

import dashboardIcon from '../../assets/Dashboard-w.webp';
import dashboardIconHover from '../../assets/Dashboard-b.webp';
import incomeIcon from '../../assets/dollar-coin-w.webp';
import incomeIconHover from '../../assets/dollar-coin.webp';
import savingsIcon from '../../assets/wallet-w.webp';
import savingsIconHover from '../../assets/wallet-b.webp';
import signOutIcon from '../../assets/signout-w.webp';
import signOutIconHover from '../../assets/signout-b.webp';
import logo from '../../assets/UBank-logo-g.webp';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  onLogout: () => void;
  className?: string; // Agregar la propiedad className opcional
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout, className }) => {
  const navigate = useNavigate();
  return (
    // Aquí pasas la className que recibe el componente al div
    <div className={`sidebar ${className || ''}`}>
      <div className="sidebar-logo">
        <img src={logo} alt="UBank Logo" />
      </div>

      <nav className="menu">
        <ul>
          <MenuItem
            iconSrc={dashboardIcon}
            iconHoverSrc={dashboardIconHover}
            text="Dashboard"
            to="/dashboard"
          />
          <MenuItem
            iconSrc={incomeIcon}
            iconHoverSrc={incomeIconHover}
            text="Income and expenses"
            to="/incomes"
          />
          <MenuItem
            iconSrc={savingsIcon}
            iconHoverSrc={savingsIconHover}
            text="Savings goals"
            to="/savings-goals"
          />
          <MenuItem
            iconSrc={signOutIcon}
            iconHoverSrc={signOutIconHover}
            text="Sign out"
            to="#"
            onClick={onLogout}
          />
        </ul>
        <div className="premium">
          <h1 className="text-premium">Be Better</h1>
          <h1 className="text-premium2">
            Be <span>Premium</span>
          </h1>
          <button className="button-premium" onClick={() => navigate('/Form')}>
            Learn more
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
