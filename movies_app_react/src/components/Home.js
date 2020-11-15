import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../register.scss";
import aplaudo from '../assets/logo1.png';
import Navbar from './Navbar'


const Register = () => {
  const [inputs, setInputs] = useState({
    EmailAddress: '',
    Password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { EmailAddress, Password } = inputs;
  const location = useLocation();
  useEffect(() => {
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (EmailAddress && Password) {
      const { from } = location.state || { from: { pathname: "/" } };
    }
  }
  return (
    <div>
      <Navbar/>
      <div className="main-container">
        <div className="left-container">
          <div className="logo-container">
            <img src={aplaudo} alt="Logo" className="logo" />
          </div>
         
        </div>
        <div className="auth-inner">
          <form className="container" name="form" onSubmit={handleSubmit}>
            <h4 className="text">Welcome to Aplaudo</h4>
            <div className="form-group">
              <label htmlFor="EmailAddress" />
              <input
                type="email"
                name="EmailAddress"
                className={'form-control email text-fields' + (submitted && !EmailAddress ? ' is-invalid' : '')}
                value={EmailAddress}
                placeholder="Email address"
                onChange={handleChange}
              />
              {submitted && !EmailAddress &&
                <div className="invalid-feedback">Email is required</div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="Password" />
              <input
                type="password"
                name="Password"
                className={"form-control password text-fields" + (submitted && !Password ? " is-invalid" : "")}
                value={Password}
                placeholder="Your password"
                onChange={handleChange}
              />
              {submitted && !Password &&
                <div className="invalid-feedback">Password is required</div>
              }
            </div>
            <p className="fgpw">
              <a href="#">Forgot your password?</a>
            </p>
            <div className="form-group">
              <button className="btn btn-primary btn-custom">
                Login
                      </button>
              <Link to="/signup" className="btn btn-link fgpw">Register</Link>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
};
export default Register;
