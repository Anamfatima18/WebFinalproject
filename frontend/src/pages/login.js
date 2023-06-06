import React, { useState } from 'react';
import axios from 'axios';
//import './LoginForm.css'; // Import the CSS file for styling
//import logo from './logo1.png';
 import { useNavigate } from 'react-router-dom';
import './page.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', { email , password });
      const token = response.data.token;
      // After receiving the token
      console.log(token)
      localStorage.setItem('token', token);
      setLoginError(false); // Clear login error if it was previously shown
       navigate('/Student'); 
      // Navigate to home page
      console.log("login success");
    } catch (error) {
      console.error(error);
      setLoginError(true); // Set login error to true to display the alert
    }
  };

  return (
    
    

<div className="Auth-form-container" onSubmit={handleSubmit}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              //type="email"
            id="Email"
            value={email}
             onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              id="password"

            value={password}
             onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
          {loginError && <p className="error">Wrong credentials. Please try again.</p>}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>

  );
};

export default Login;

