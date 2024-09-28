import React, { useState } from 'react';
import Header from '../Form/Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import AnswerOption from './Components/Answers/Answers';

const Form: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const options = [
    { text: 'I have regular income (salary, scholarship, etc.)', icon: '/path/to/icon1.png' },
    { text: 'I have occasional income (casual work)', icon: '/path/to/icon2.png' },
    { text: 'I have no income but I want to save', icon: '/path/to/icon3.png' },
  ];

  const selectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div>
      <Header />
      <Question
        currentNumber="1 of 6"
        text="What is your current financial situation?"
        instruction="Select one option"
        imageSrc="/path/to/questionImage.png"  // Imagen de la esquina superior derecha
        questionIndicator="/path/to/indicator.png"  // Indicador de respuesta
      />
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
    </div>
  );
};

export default Form;
