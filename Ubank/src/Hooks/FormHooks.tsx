import { useEffect, useState } from "react";
import { transformData } from "../utils/Transformer";
import { useNavigate } from "react-router-dom";

export const useForm = () => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [optionvalue, setOptionvalue] = useState<any[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | number[] | null>(null); // Permitir múltiples selecciones para checkbox
    const [generalIndex, setGeneralIndex] = useState<number>(1);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await transformData() || [];
                const sortbyid = data.sort((a, b) => a.id - b.id);
                setQuestions(sortbyid);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const optionss = questions.length > 0 ? questions[questionIndex].options : [];

    const handleNext = () => {
        if (questionIndex === 11 || questionIndex === 10) {
            navigate("/plan", { state: { optionvalue } });
        }

        if (questions[questionIndex]?.id === 9) {
            // Para la pregunta con selección múltiple
            const selectedOptions = Array.isArray(selectedAnswer) ? selectedAnswer : [];
            if (selectedOptions.length === 0) return;

            // Lógica para avanzar, por ejemplo, avanzando según la primera opción seleccionada
            const nextquestion = optionss[0].next; // O puedes modificar esto si deseas avanzar de otra manera
            setQuestionIndex(nextquestion);
            setGeneralIndex(generalIndex + 1);
            setSelectedAnswer(null); // Reiniciar selección
        } else {
            // Lógica para selección única
            const selectedAnswervalue = selectedAnswer;
            if (selectedAnswervalue === null || Array.isArray(selectedAnswervalue)) return;

            const nextquestion = optionss[selectedAnswervalue].next;
            setQuestionIndex(nextquestion);
            setGeneralIndex(generalIndex + 1);
            setSelectedAnswer(null);
        }
    };

    const handlePrevious = () => {
        setGeneralIndex(0);
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setOptionvalue([]);
    };

    const handleselectedAnswer = (index: number) => {
        if (questions[questionIndex]?.id === 9) {
            // Lógica para selección múltiple (checkboxes)
            if (Array.isArray(selectedAnswer)) {
                if (selectedAnswer.includes(index)) {
                    // Deselecciona si ya estaba seleccionado
                    setSelectedAnswer(selectedAnswer.filter((i) => i !== index));
                    setOptionvalue(optionvalue.filter((value) => value !== optionss[index].value)); // Eliminar el valor
                } else {
                    // Añadir opción seleccionada
                    setSelectedAnswer([...selectedAnswer, index]);
                    setOptionvalue([...optionvalue, optionss[index].value]); // Añadir el valor
                }
            } else {
                setSelectedAnswer([index]); // Inicializa como array si es la primera selección
                setOptionvalue([...optionvalue, optionss[index].value]); // Añadir el valor
            }
        } else {
            // Lógica para selección única
            setSelectedAnswer(index);
            setOptionvalue([...optionvalue, optionss[index].value]); // Añadir el valor
        }
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
};


