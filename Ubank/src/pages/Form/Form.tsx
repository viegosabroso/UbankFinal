import React, { useEffect, useState } from 'react';
import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import AnswerOption from './Components/Answers/Answers';
import NavigationButtons from './Components/NavigationButtons/Navigation';
import './Form.css';
import { transformData } from '../../utils/Transformer';


const Form: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  //esto hay q borrarlo y poner las opciones desde la base de datos
  const options = [
    { text: 'I have regular income (salary, scholarship, etc.)', icon: '/path/to/icon1.png' },
    { text: 'I have occasional income (casual work)', icon: '/path/to/icon2.png' },
    { text: 'I have no income but I want to save', icon: '/path/to/icon3.png' },
    { text: 'I have no income and I do not want to save', icon: '/path/to/icon4.png' },
  ];

  // const selectAnswer = (index: number) => {
  //   setSelectedAnswer(index);
  // };

 useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await transformData() ||   [];

           const sortbyid = data.sort((a, b) => a.id - b.id);
           setQuestions(sortbyid);
            
            

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
   
   
}, []);

const optionss = questions.length > 0 ? questions[questionIndex].options: [];

console.log(optionss);

const handleNext = () => {
  if (questionIndex < questions.length - 1) {
    setQuestionIndex(questionIndex + 1);
  }
};

const handlePrevious = () => {
  if (questionIndex > 0) {
    setQuestionIndex(questionIndex - 1);
    console.log("holaquehace");
    
  }
};




  
  return (
    <div>
      <Header />
      {/* //estos props se deben cambiar algunos por la base de datos y otros son de logica*/}
      <Question
        currentNumber={"Question " + (questionIndex + 1) + " of " + questions.length}
        text={questions.length > 0 ? questions[questionIndex].text : ""}
        instruction="Select one option"
        imageSrc="/path/to/questionImage.png"  // Imagen de la esquina superior derecha
        questionIndicator="/path/to/indicator.png"  // Indicador de respuesta
      />
      {/* //estos props se deben cambiar por la base de datos */}
      <div className="answers">
        {optionss.map((option: any, index: number) => (
          <AnswerOption
            key={index}
            text={option.label}
            iconSrc={option.icon}
          />
        ))}
      </div>
      <NavigationButtons Plusindex={handleNext} Minusindex={handlePrevious}></NavigationButtons>
    </div>
  );
};

export default Form;
