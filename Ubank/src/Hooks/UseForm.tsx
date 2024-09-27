import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({ fullName: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de validación o envío del formulario
    console.log(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;