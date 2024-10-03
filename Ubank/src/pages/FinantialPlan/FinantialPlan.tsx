
import './FinantialPlan.css';
import Card from './Components/cards/Card';
import { Planshooks } from '../../Hooks/Planshooks';

const FinantialPlan = () => {
  const { title, filteredPlans } = Planshooks();

  return (
    <div className="financial-plan-container">
      <div className="top-rectangle"></div> {/* Rectángulo negro superior */}

      <div className="content">
        <h1 className="subtitle">Your best financial plan is:</h1>
        <h2 className="<efficient-subtitle">{title}</h2> {/* Display the most frequent plan */}
        
        <div className="card-container">

          {filteredPlans.map((description: any, index: number) => (
            <Card key={index} number={index + 1} text={description} />
          ))}
        {/* Texto adicional */}
        <div className='Container_Text'>
        <p className="contact-text">Do you want to create this plan with us?</p>
        <p className="contact-text2">¡Let us send you an email and let’s get in contact!</p>
        </div>


          <div className="button-container">
            <button className="button gray-button">Restart</button>
            <button className="button colored-button">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinantialPlan;
