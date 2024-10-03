import React, { useState,  } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../../../Hooks/UseAuth";
import InputForm from "../InputForm/InputForm";  // Importa el componente InputForm
import './SignUpForm.css'

const SignUp: React.FC = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>(""); //Ajustar la ventana de errores
  const { register } = useAuth();
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      await register(values.email, values.password, values.fullName);
      navigate("/dashboard");
    } catch (error) {
      setError("Error al registrar el usuario");
    }
  };

  return (
    <div className="sign-up-container">
      <div className="left-panel">
        <h2>
          Grow your money with <span className="ubank">UBank!</span> 🚀
        </h2>
        <div>
          <img className="illustration" src="./src/assets/Pig.webp" alt="Illustration" />
        </div>
      </div>
      <div className="right-panel">
        <h2>
          Create <span className="highlight">Account</span>
        </h2>
        <p>
          Sign up today and keep full control of your finances in one place.
        </p>
        
        <form onSubmit={handleSubmit}>
          <InputForm
            placeholder="Enter your name..."
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          <InputForm
            placeholder="example@gmail.com"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <InputForm
            placeholder="*******"
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Do you already have an Account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
