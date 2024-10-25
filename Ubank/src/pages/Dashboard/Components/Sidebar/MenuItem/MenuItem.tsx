import './MenuItem.css';

interface MenuItemProps {
  icon: string;
  text: string;
  active?: boolean; // Este prop es opcional
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, active = false }) => {
  return (
    <li className={`menu-item ${active ? 'active' : ''}`}>
      <span className="icon">{icon}</span>
      {text}
    </li>
  );
};

export default MenuItem;