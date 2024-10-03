import Header from './Components/FormHeader/FormHeader';
import Question from './Components/Questions/Questions';
import NavigationButtons from './Components/NavigationButtons/Navigation';
import './Form.css';
import { useForm } from '../../Hooks/FormHooks';
import AnswerOption from './Components/Answers/Answers';
import { Toaster } from 'react-hot-toast';

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
        {/* Estilo directamente en el componente para el círculo */}
        <span
          className="custom-checkbox"
          style={{
            width: '20px',  // Ancho del círculo
            height: '20px', // Alto del círculo
            border: '5px solid #D9D9D9',
            borderRadius: '50%',
            display: 'inline-block',
            justifyContent: 'center',
            marginRight: '25px',
            alignItems: 'center',
            backgroundColor: isSelected ? '#8644DB' : 'transparent', // Color de fondo si está seleccionado
            transition: 'background-color 0.1s ease',
          }}
        />
        <span>{text}</span>
      </label>
    </div>
  );
};



const Form: React.FC = () => {
  const { generalIndex, questionIndex, questions, optionss, handleNext, handlePrevious, handleselectedAnswer, selectedAnswer } = useForm();

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}/>
      <Header />
      <Question 
        currentNumber={"Question " + (generalIndex + 0)}
        text={questions.length > 0 ? questions[questionIndex].text : ""}
        instruction={questions[questionIndex].id === 9 ? "Select Multiple Options": "Select one option"}
        imageSrc="" 
        questionIndicator="/path/to/indicator.png"
      />

      <div className="answers">
        {/* Condición para mostrar las opciones como checkboxes si es la pregunta con ID 9 */}
        {questions[questionIndex]?.id === 9 ? (
          <div className="checkbox-container"> {/* Contenedor para checkboxes */}
            {optionss.map((option: any, index: number) => (
              <CheckboxAnswerOption
                key={index}
                text={option.label}
                isSelected={Array.isArray(selectedAnswer) && selectedAnswer.includes(index)} // Comprobación de selección
                onChange={() => handleselectedAnswer(index)} // Manejo de selección
              />
            ))}
          </div>
        ) : questionIndex < 11 ? (
          optionss.map((option: any, index: number) => (
            <AnswerOption
              Onselect={() => handleselectedAnswer(index)}
              isSelected={selectedAnswer === index}
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

