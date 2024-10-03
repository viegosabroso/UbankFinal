import React, { useState } from "react";
import InputForm from "../SignUp/Components/InputForm/InputForm";
import useAuth from "../../Hooks/UseAuth"; 
import { useNavigate, Link } from 'react-router-dom'; 
import toast from "react-hot-toast";
import '../SignUp/Components/SignUpForm/SignUpForm.css'

const LogIn: React.FC = () => {
  const { login, loginWithGoogle } = useAuth(); 
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); // revisar

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
      await login(values.email, values.password);
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error); 
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle(); 
      navigate("/dashboard"); 
    } catch (error: any) {
      toast.error("Error al iniciar sesión con Google. Intente nuevamente.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="sign-up-container">
      <div className="left-panel">
        <h2>
          It's time to take control of <span className="ubank">your finances!</span>💰
        </h2>
        <div>
          <img className="illustration" src="./src/assets/Nice.webp" alt="Illustration" />
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
          <button 
            type="submit" 
            className="sign-up-button" 
            disabled={loading} 
          >
            Log In
          </button>
        </form>

        <button 
          className="google-login-button" 
          onClick={handleGoogleLogin} 
          disabled={loading} 
        >
          Log In with Google
        </button>

        <p className="login-link">
          Don't have an account? <Link to="/">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
