import InputForm from "../SignUp/Components/InputForm/InputForm"; 
import './SignUpForm.css'

const SignUp: React.FC = () => {
  

  return (
    <div className="sign-up-container">
      <div className="left-panel">
        <h2>
            It's time to take control of <span className="ubank">your finances!</span> 💰
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
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
            Don't have an account?<a href="/login">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

