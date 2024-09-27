import React from "react";


const SignUpForm: React.FC = () => {


    return(
        <>
        <div className="sign-up-form">
        <h2>Create Account</h2>
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
        <button type="submit">Sign Up</button>
        <p>Do you already have an Account? <a href="">Log In</a></p>
        </form>
        </div>
      </>
    )
}