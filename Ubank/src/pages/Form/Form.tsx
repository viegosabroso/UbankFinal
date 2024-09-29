import React, { useState } from 'react';
import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import AnswerOption from './Components/Answers/Answers';
import { transformData } from '../../utils/Transformer';




const Form: React.FC = () => {
  
  
  //esto hay q borrarlo y poner las opciones desde la base de datos
  

  const selectAnswer = (index: number) => {
    
  };

  return (
    <div onClick={transformData}>
      <Header />
      
      <div className="answers">
        
      </div>
    </div>
  );
};

export default Form;
