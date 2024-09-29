import React, { useState } from 'react';
import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import AnswerOption from './Components/Answers/Answers';

import { transformData } from '../../utils/Transformer';




import NavigationButtons from './Components/NavigationButtons/Navigation';


const Form: React.FC = () => {
  
  
  //esto hay q borrarlo y poner las opciones desde la base de datos
  

  const selectAnswer = (index: number) => {
    
  };

  // const selectAnswer = (index: number) => {
  //   setSelectedAnswer(index);
  // };


  return (
    <div onClick={transformData}>
      <Header />

      {/* //estos props se deben cambiar algunos por la base de datos y otros son de logica*/}
      <Question
        currentNumber="1 of 6"
        text="What is your current financial situation?"
        instruction="Select one option"
        imageSrc="/path/to/questionImage.png"  // Imagen de la esquina superior derecha
        questionIndicator="/path/to/indicator.png"  // Indicador de respuesta
      />
      {/* //estos props se deben cambiar por la base de datos */}

      <div className="answers">
        
      </div>
      <NavigationButtons></NavigationButtons>
    </div>
  );
};

export default Form;
