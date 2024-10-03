import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../../../Hooks/UseAuth";
import InputForm from "../InputForm/InputForm"; 
import toast from "react-hot-toast";
import './SignUpForm.css';

const SignUp: React.FC = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(values.email, values.password, values.fullName);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="container-responsive-logo">
    <img className="responsive-logo" src="./src/assets/UB-logo.webp" alt="" />
    </div>
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
      <img className="desktop-logo" src="./src/assets/UBank-LogoCompleto.webp" alt="" />
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
          <button 
          type="submit" 
          className="sign-up-button" 
          disabled={loading}>
            Sign Up
          </button>

          <button 
            type="submit" 
            className="sign-up-button" 
            onClick={handleGoogleSignUp} 
            disabled={loading}>
            Sign Up with Google
          </button>

          <p className="login-link">
            Do you already have an Account? <Link to="/login">Log In</Link>
          </p>
        
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
