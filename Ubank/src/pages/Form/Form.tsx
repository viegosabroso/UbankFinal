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
  const [optionvalue, setOptionvalue] = useState<any[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const [generalIndex, setGeneralIndex] = useState<number>(1);


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



const handleNext = () => {
  const selectedAnswervalue = selectedAnswer 
  const nextquestion = optionss[selectedAnswervalue].next;
  setQuestionIndex(nextquestion);
  setGeneralIndex(generalIndex + 1);
  setSelectedAnswer(0);
  if(questionIndex === 5){
    
  }
};

const handlePrevious = () => {
  if (questionIndex > 0) {
     
    setQuestionIndex(questionIndex - 1);
    console.log("holaquehace");
    
  }
};

  const handdleselectedAnswer = (index: any) => {
    setSelectedAnswer(index);


    console.log(optionss[index].next);
    console.log(optionvalue);
    setOptionvalue([...optionvalue,optionss[index].value]);
    console.log(index);
  };

   {
    if (generalIndex === 5) {
    const getnextbutton = document.getElementsByClassName('next')
    getnextbutton[0].innerHTML = "Finish";

  }
  }


  
  return (
    <div>
      <Header />
      {/* //estos props se deben cambiar algunos por la base de datos y otros son de logica*/}
      <Question 
        currentNumber={"Question " + (generalIndex + 0) + " of " + 5}
        text={questions.length > 0 ? questions[questionIndex].text : ""}
        instruction="Select one option"
        imageSrc= ""  // Imagen de la esquina superior derecha
        questionIndicator="/path/to/indicator.png"  // Indicador de respuesta
      />
      {/* //estos props se deben cambiar por la base de datos */}
      <div className="answers" >
        {optionss.map((option: any, index: number) => (
          <AnswerOption
            Onselect={() => handdleselectedAnswer(index)}
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
