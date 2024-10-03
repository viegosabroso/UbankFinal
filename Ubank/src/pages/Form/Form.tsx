import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import NavigationButtons from './Components/NavigationButtons/Navigation';
import './Form.css';
import { useForm } from '../../Hooks/FormHooks';
import AnswerOption from './Components/Answers/Answers';

// Componente para renderizar opciones de tipo checkbox
const CheckboxAnswerOption: React.FC<{ text: string, isSelected: boolean, onChange: () => void }> = ({ text, isSelected, onChange }) => {
  return (
    <div className="checkbox-answer">
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onChange}
        />
        {text}
      </label>
    </div>
  );
};

const Form: React.FC = () => {
  const { generalIndex, questionIndex, questions, optionss, handleNext, handlePrevious, handleselectedAnswer, selectedAnswer } = useForm();
  
  return (
    <div>
      <Header />
      <Question 
        currentNumber={"Question " + (generalIndex + 0)}
        text={questions.length > 0 ? questions[questionIndex].text : ""}
        instruction="Select one option"
        imageSrc="" 
        questionIndicator="/path/to/indicator.png"
      />

      <div className="answers">
        {/* Condición para mostrar las opciones como checkboxes si es la pregunta con ID 9 */}
        {questions[questionIndex]?.id === 9 ? (
          optionss.map((option: any, index: number) => (
            <CheckboxAnswerOption
              key={index}
              text={option.label}
              isSelected={Array.isArray(selectedAnswer) && selectedAnswer.includes(index)} // Comprobación para múltiples selecciones
              onChange={() => handleselectedAnswer(index)} // Manejo de selección
            />
          ))
        ) : questionIndex < 11 ? (
          optionss.map((option: any, index: number) => (
            <AnswerOption
              Onselect={() => handleselectedAnswer(index)}
              isSelected={selectedAnswer === index} // Manejo de selección para respuestas únicas
              key={index}
              text={option.label}
              iconSrc={option.icon}
            />
          ))
        ) : (
          <input type="text" className='text-imput' placeholder='Type your other concerns here' />
        )}
      </div>
      
      <NavigationButtons Plusindex={handleNext} Minusindex={handlePrevious} />
    </div>
  );
};

export default Form;


