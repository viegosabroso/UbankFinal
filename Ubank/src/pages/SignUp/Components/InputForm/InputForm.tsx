import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <>
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </>
  )
}

export default InputForm;