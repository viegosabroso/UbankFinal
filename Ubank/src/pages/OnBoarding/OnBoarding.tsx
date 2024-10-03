import React from 'react';
import './Components/OnBoarding.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../Assets/competitor-analysis--business-competitor-analysis.webp';
import img2 from '../../Assets/coin.webp';
import img3 from '../../Assets/obnimg.webp';
import img4 from '../../Assets/pig.webp';
import img5 from '../../Assets/question.webp';
import img6 from '../../Assets/wallet.webp';
const OnBoarding: React.FC = () => {
  const navigate = useNavigate();

  return (
  <div className="flex-container"> {/* Nuevo contenedor para la alineación */}
        <img src={img4} alt="pig" className='pig'/>
        <img src={img3} alt="calculator" className='calculator' />
        <img src={img2} alt="coin" className='coin'/>
        <img src={img5} alt="question-mark" className='question'/>
        <img src={img5} alt="question-mark" className='question-two'/>
        <img src={img6} alt="wallet" className='wallet'/>
      <div className="onboarding-container">
        
        <div className="content">
          <img src={img1} alt="on-boarding-img"/>
          
          <h1 className="subtitle">Discover your best financial plan</h1>
          
          <p className="body-text">
            Whether you're a student without income, with savings, or managing monthly payments, we'll help you find the best way to manage your money. Start now and build your financial future!
          </p>
          
          <button className="cta-button" onClick={() => {navigate("/form")}} >Get started</button>
        </div>
      </div>
    </div>
  );
}

export default OnBoarding;
