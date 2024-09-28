import React from 'react';

interface AnswerOptionProps {
    iconSrc: string;  //propiedad para el ícono 
    text: string;
    isSelected: boolean;
    onSelect: () => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ text, isSelected, onSelect, iconSrc }) => {
    return (
        <div
            className={`answer-option ${isSelected ? 'selected' : ''}`}
            onClick={onSelect}
            style={{ backgroundColor: isSelected ? 'lightgreen' : 'white' }}
        >
        <img src={iconSrc} alt="Option Icon" className="option-icon" />
        {text}
        </div>
    );
};

export default AnswerOption;
