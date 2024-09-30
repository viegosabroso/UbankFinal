
import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import AnswerOption from './Components/Answers/Answers';
import NavigationButtons from './Components/NavigationButtons/Navigation';
import './Form.css';
import { useForm } from '../../Hooks/FormHooks';


const Form: React.FC = () => {
    const { generalIndex, questionIndex, questions, optionss, handleNext, handlePrevious, handleselectedAnswer } = useForm();
    
    
    return (
    <div>
      <Header />
      <Question 
        currentNumber={"Question " + (generalIndex + 0)}
        text={questions.length > 0 ? questions[questionIndex].text : ""}
        instruction="Select one option"
        imageSrc= "" 
        questionIndicator="/path/to/indicator.png"
      />

      <div className="answers" >
        {questionIndex < 11 && optionss.map((option: any, index: number) => (
          <AnswerOption
            Onselect={() => handleselectedAnswer(index)}
            key={index}
            text={option.label}
            iconSrc={option.icon}
          />
        ))
        || <input type="text" />
}
      </div>
      <NavigationButtons Plusindex={handleNext} Minusindex={handlePrevious}></NavigationButtons>
    </div>
  );
};

export default Form;
