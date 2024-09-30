import { useEffect, useState } from "react"
import { transformData } from "../utils/Transformer"
import { useNavigate, useLocation } from "react-router-dom";


export const useForm = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [optionvalue, setOptionvalue] = useState<any[]>([]);
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
    const selectedAnswervalue = selectedAnswer 
    const nextquestion = optionss[selectedAnswervalue].next;
    console.log(optionss);
    

    setQuestionIndex(nextquestion);
    setGeneralIndex(generalIndex + 1);
    setSelectedAnswer(0);
    console.log(optionvalue);
    
    if(questionIndex === 5){
      navigate("/plan", { state: { optionvalue } } )
    }
  };
  
  const handlePrevious = () => {
    if (questionIndex > 0) {
       
      setQuestionIndex(generalIndex - 1);
      console.log("holaquehace");
      
    }
  };
  
  const handleselectedAnswer = (index: number) => {
    
    
    setSelectedAnswer(index);
    const alreadyselected = optionss.findIndex((option: any) => option.selected === true);
    if (alreadyselected >= 0) {
      optionss[alreadyselected].selected = false;
    }
    setOptionvalue(optionss[index].value);

    console.log(index);

    
    
  };

  if (generalIndex === 5) {
    const getnextbutton = document.getElementsByClassName('next');
    if (getnextbutton.length > 0) {
      getnextbutton[0].innerHTML = "Finish";
    }
  }
  
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