import React, { useState } from 'react';
import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import AnswerOption from './Components/Answers/Answers';
import NavigationButtons from './Components/NavigationButtons/Navigation';

const Form: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  //esto hay q borrarlo y poner las opciones desde la base de datos
  const options = [
    { text: 'I have regular income (salary, scholarship, etc.)', icon: '/path/to/icon1.png' },
    { text: 'I have occasional income (casual work)', icon: '/path/to/icon2.png' },
    { text: 'I have no income but I want to save', icon: '/path/to/icon3.png' },
  ];

  // const selectAnswer = (index: number) => {
  //   setSelectedAnswer(index);
  // };

  return (
    <div>
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
        {options.map((option, index) => (
          <AnswerOption
            key={index}
            text={option.text}
            iconSrc={option.icon}
            isSelected={selectedAnswer === index}
            onSelect={() => selectAnswer(index)}
          />
        ))}
      </div>
      <NavigationButtons></NavigationButtons>
    </div>
  );
};

export default Form;
