
import Sidebar from '../../components/Sidebar/Sidebar';
import './Savings.css'

import UseDashboard from '../../Hooks/DashboardHooks';


import UseSavings from '../../Hooks/Usesavings';


const SavingsGoals: React.FC = () => {
  
  
  
  const {handlescreens} = UseSavings() 

  

  const {handleLogout} = UseDashboard() as { username: string; handleLogout: () => Promise<void>; };

  return (
    <div className='savings-goals-container'>
        <Sidebar onLogout={handleLogout} />
      <section className='info-section'>
        <h1 className="main-title">Savings</h1>
      
        <div className='savingsScreens-container'>
          {handlescreens()}
        </div>
      </section>
    </div>
  );
};

export default SavingsGoals;
