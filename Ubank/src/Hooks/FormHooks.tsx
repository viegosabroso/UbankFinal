import { useEffect, useState } from "react"
import { transformData } from "../utils/Transformer"
import { useNavigate } from "react-router-dom";



export const useForm = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [optionvalue, setOptionvalue] = useState<any[]>([0]);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
    const [generalIndex, setGeneralIndex] = useState<number>(1);
  
    const navigate = useNavigate();

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
     
     
  }, [location]);
  
  const optionss = questions.length > 0 ? questions[questionIndex].options: [];

  
  
  
  const handleNext = () => {
    if(questionIndex === 11 || questionIndex === 10){
      navigate("/plan", { state: { optionvalue } } )
    }

    console.log(questionIndex);
    
    const selectedAnswervalue = selectedAnswer 
    const nextquestion = optionss[selectedAnswervalue].next;
    console.log(optionss);
    

    setQuestionIndex(nextquestion);
    setGeneralIndex(generalIndex + 1);
    setSelectedAnswer(0);
    console.log(optionvalue);
    if (nextquestion === 11 || nextquestion === 10) {
      const getnextbutton = document.getElementsByClassName('next');
      if (getnextbutton.length > 0) {
        getnextbutton[0].innerHTML = "Finish";
      }
    }
    
  };
  
  const handlePrevious = () => {
      setGeneralIndex(0);
      setQuestionIndex(0);
      setSelectedAnswer(0);
      setOptionvalue([]);
      console.log(optionvalue);
  };
  
  const handleselectedAnswer = (index: number) => {
    
    
    setSelectedAnswer(index);
    
    
    setOptionvalue([...optionvalue, optionss[index].value]);
    console.log(optionvalue);
    
    console.log(index);

    
    
  };

 
  
  return {
    questions,
    questionIndex,
    optionss,
    selectedAnswer,
    optionvalue,
    handleNext,
    handlePrevious,
    handleselectedAnswer,
    generalIndex,
  };
    
}