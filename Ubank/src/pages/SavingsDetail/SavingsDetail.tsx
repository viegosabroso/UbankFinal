import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import UseDashboard from "../../Hooks/DashboardHooks";

import SavingDetailed from "./Components/Saving/SavingDetailed";
import { useContext } from "react";
import { IncomesContext } from "../../Context/Incomes";


interface SavingData {
  goalName: string;
  savingFrequency: string;
  goalAmount: number;
  saved: [{
    amount: number;
    date: string;
  }];
}

const SavingsDetail = () => {
   
  
  
  const {savingsdata } = useContext(IncomesContext)
  console.log(savingsdata);
  
    const param = useLocation().pathname.split('/')[2]
    const paraid = parseInt(param)

    const savingsdata1: SavingData = savingsdata[paraid+1]
    
    const {handleLogout} = UseDashboard() as { username: string; handleLogout: () => Promise<void>; };
    
  return (
    <>
     <div className='savings-goals-container'>
        <Sidebar onLogout={handleLogout} />
      <section className='info-section'>
        <h1 className="main-title">Savings</h1>
      
      </section>
      <div>
        <SavingDetailed savingtitle={savingsdata1.goalName} savedtotal={2} savingFrequency={savingsdata1.savingFrequency} savingamount={savingsdata1.goalAmount} savingsdone={savingsdata1.saved} />
      </div>
    </div>
    </>
  );
};

export default SavingsDetail;