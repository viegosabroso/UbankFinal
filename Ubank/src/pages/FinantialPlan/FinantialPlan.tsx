import './FinantialPlan.css';
import Card from './Components/cards/Card';
import { Planshooks } from '../../Hooks/Planshooks';
import { useNavigate } from 'react-router-dom';
import img1 from  '../../Assets/Group-1000006265.webp';
import img2 from  '../../Assets/NFT-Marketplace--cryptocurrency-crypto-web 3.0-metaverse-bitcoin-ethereum.webp';
import img3 from '../../Assets/Graph-Negative--Streamline-Manila.webp';
import img4 from '../../Assets/Group-1000006394.webp';
import img5 from '../../Assets/ilustracionesform5.png';
import img6 from '../../Assets/Payment-With-Card-2--Streamline-Manila.webp';
import img7 from '../../Assets/ilustracionesform2.png';
import img8 from '../../Assets/ilustracionesform6.png';


// Aquí defines un mapeo de descripciones a imágenes
const enunciadoImages: { [key: string]: string } = {
  "We recommend our Ubank student credit card with 0 management fee and considerable limits with low interest.": img1,
  "Set budgets and manage your expenses using lists. With your Ubank app, we can help you!": img2,
  "Consolidate your debts or daily expenses! Set a specific budget for your debts and fixed expenses, and turn them into a single payment.": img3,
  "Explore Ubank's free online courses to master budgeting, saving, and smart spending." :img4,
  "Get personalized tips on managing your finances and building long-term wealth with Ubank's expert advice." :img5,
  "Try our Ubank Youth Savings Account with no fees, competitive rates, and easy goal tracking for young savers.": img6,
  "Use the Ubank app to set personalized savings goals and monitor your progress with our interactive dashboard.": img7,
  "Save smart without a steady income! Ubank Youth Academy provides free financial education for freelancers": img8,

  // Agrega más mapeos de descripciones a imágenes
};

const FinantialPlan = () => {
  const { title, filteredPlans } = Planshooks();
  const navigate = useNavigate();

  return (
    
    <div className="financial-plan-container">
      <div className="top-rectangle"></div> {/* Rectángulo negro superior */}

      <div className="ob-content">
        <h1 className="subtitle">Your best financial plan is:</h1>
        <h2 className="<efficient-subtitle">{title}</h2> {/* Display the most frequent plan */}
        
        <div className="card-container-financialPlan">
          {/* Mapea las descripciones y asocia cada una con su imagen */}
          {filteredPlans.map((description: string, index: number) => (
            <Card
              key={index}
              number={index + 1}
              text={description}
              imageSrc={enunciadoImages[description] || "/images/default-plan.png"}  // Asigna una imagen según la descripción o una por defecto
            />
          ))}
        </div>

        {/* Texto adicional */}
        <div className='Container_Text'>
          <p className="contact-text">Do you want to create this plan with us?</p>
          <p className="contact-text2">Let us send you an email and let’s get in contact!</p>

          <div className="button-container">
            <button className="button gray-button" onClick={() => navigate('/form')}>Restart</button>
            <button className="button colored-button">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinantialPlan;

