import React, { useState } from "react";
import InputForm from "../SignUp/Components/InputForm/InputForm";
import useAuth from "../../Hooks/UseAuth"; 
import { useNavigate, Link } from 'react-router-dom'; 


const LogIn: React.FC = () => {
  const { login } = useAuth(); // Extrae la función de login del hook
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const navigate = useNavigate(); // Inicializa el hook para la navegación

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Llama a la función login de Firebase
      await login(values.email, values.password);
    } catch (error) {
      // Maneja los errores aquí si es necesario
    } finally {
      setLoading(false); // Detiene el loading
    }
  };

  return (
    <div className="sign-up-container">
      <div className="left-panel">
        <h2>
          Take control of <span className="ubank">your finances!</span> 💰
        </h2>
        <div className="illustration">
          <img src="" alt="Illustration" />
        </div>
      </div>
      <div className="right-panel">
        <h2>
          Welcome <span className="highlight">back!</span>
        </h2>
        <p>
          We’re excited to help you take charge of your finances and achieve your goals!
        </p>

        <form onSubmit={handleSubmit}>
          <InputForm
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <InputForm
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <button type="submit" className="sign-up-button" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="login-link">
          Don't have an account? <Link to="/">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;

