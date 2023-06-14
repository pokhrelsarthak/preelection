import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isFormValid) {
      history.push('/home');
    }
  }, [isFormValid, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:8080/signup/all`).then((respo) => {
        const responseData = respo.data;
        const enteredUsername = username; // Replace with the username entered by the user
        const enteredPassword = password; // Replace with the password entered by the user

        // Find the user object with the entered username
        const user = responseData.find((user) => user.username === enteredUsername);
          
        if (user) {
          if (user.password === enteredPassword) {
            console.log('Password matched!');
            setIsFormValid(true);
            props.setRender(true);
          } else {
            console.log('Password does not match!');
            alert('Incorrect Password');
            setIsFormValid(false);
            props.setRender(false);
            return;
          }
        } else {
          console.log('User not found!');
          alert('User not found');
          setIsFormValid(false);
          props.setRender(false);
          return;
        }

        // Reset form fields
        setUsername('');
        setPassword('');
      })
      .catch((error) => {
        console.error('Axios error:', error);
      });
  };

  return (
    <div>
      <center>
        <h2>Login</h2>
      </center>
      <form>
        <div>
          <center>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} required />
          </center>
        </div>
        <div>
          <center>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </center>
        </div>
      </form>
      <div className="ms-3">
        <center>
          <button onClick={handleSubmit} className="btn btn-primary mx-5">
            Login
          </button>
          <p>
          New User? <Link to="/signup">Signup</Link>
        </p>
        </center>
      </div>
    </div>
  );
};

export default Login;
