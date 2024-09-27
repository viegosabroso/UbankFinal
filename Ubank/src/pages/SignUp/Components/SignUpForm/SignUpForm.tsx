import React from "react";
import InputForm from "../InputForm/InputForm";
import useForm from "../../../../Hooks/UseForm";
import './SignUpForm.css'

const SignUpForm: React.FC = () => {
    const { values, handleChange, handleSubmit } = useForm();
  
    return (
      <div className="sign-up-container">
        <div className="left-panel">
          <h2>Grow your money with <span className="ubank">UBank!</span> 🚀</h2>
          <div className="illustration">
            <img src="" alt="" />
          </div>
        </div>
        <div className="right-panel">
          <h2>Create <span className="highlight">Account</span></h2>
          <p>Sign up today and keep full control of your finances in one place.</p>
          <form onSubmit={handleSubmit}>
            <InputForm
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
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
            <button type="submit" className="sign-up-button">Sign Up</button>
          </form>
          <p className="login-link">Do you already have an Account? <a href="/login">Log In</a></p>
        </div>
      </div>
    );
  };
  
  export default SignUpForm;