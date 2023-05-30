// import React, { useState } from 'react';
// import "./Login.css";
// import { Link } from 'react-router-dom';

// const Login = ({ signupData }) => {

//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState('');

//  const handleUsernameChange = (e) => {

//  setUsername(e.target.value);

//  };

//  const handlePasswordChange = (e) => {

//  setPassword(e.target.value);

//  };

//  const handleSubmit = (e) => {

//  e.preventDefault();
//  // Perform login authentication logic here

//  // You can use APIs or other authentication mechanisms

//  const matchedUser = signupData.find((user) => user.username === username && user.password === password);

//  if (matchedUser) {

// console.log('Login successful');

//  // Perform further actions for successful login, such as redirecting to a dashboard or setting authentication state

//  }

//  else {

//  console.log('Invalid username or password');

//  // Handle error for invalid credentials, such as showing an error message

// }
//  // Reset form fields

//  setUsername('');

//  setPassword('');

//  };
//  return (

//  <div>

//  <center>

//  <h2>Login</h2>
//   </center>

//  <form onSubmit={handleSubmit}>

//  <div>

//  <center>

//  <label>Username:</label>

//  <input type="text" value={username} onChange={handleUsernameChange} required />

//  </center>

//  </div>

//  <div>

//  <center>

//  <label>Password:</label>
//  <input type="password" value={password} onChange={handlePasswordChange} required />
//  </center>

//  </div>

//  <div className="ms-3">

//  <center>

//  <Link to="/home"><button type="button" className="btn btn-primary mx-5">Login</button></Link>

//  <Link to="/signup"><button type="button" className="btn btn-success">Signup</button></Link>

//  </center>

//  </div>

//  </form>

//  </div>

//  );

// };




// export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import { Link, useHistory } from 'react-router-dom';


// const Login = ({ signupData }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login authentication logic here
//     // You can use APIs or other authentication mechanisms
//     const matchedUser = signupData.find((user) => user.username === username && user.password === password);
//     if (matchedUser) {
//       console.log('Login successful');
//       history.push('/home');
//       // Perform further actions for successful login, such as redirecting to a dashboard or setting authentication state
//     } else {
//       console.log('Invalid username or password');
//       // Handle error for invalid credentials, such as showing an error message
//     }
//     // Reset form fields
//     // setUsername('');
//     // setPassword('');
//   };

//   const isFormValid = username && password;

//   return (
//     <div>
//       <center>
//         <h2>Login</h2>
//       </center>
//       <form>
//         <div>
//           <center>
//             <label>Username:</label>
//             <input type="text" value={username} onChange={handleUsernameChange} required />
//           </center>
//         </div>
//         <div>
//           <center>
//             <label>Password:</label>
//             <input type="password" value={password} onChange={handlePasswordChange} required />
//           </center>
//         </div>
//       </form>
//       <div className="ms-3">
//           <center>
//             {isFormValid ? (
//               <Link to="/home">
//                 <button onClick={handleSubmit} className="btn btn-primary mx-5">
//                    Login
//                 </button>
//               </Link>
//             ) : (
//               <Link to="/home">
//               <button className="btn btn-primary mx-5" disabled>
//                 Login
//               </button>
//               </Link>
//             )}
//             <Link to="/signup">
//               <button type="button" className="btn btn-success">
//                 Signup
//               </button>
//             </Link>
//           </center>
//         </div>
//     </div>
//   );
// };

// export default Login;

// login.js
import React, { useState,useEffect } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

const Login = ({ signupData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const matchedUser = signupData.find((user) => user.username === username && user.password === password);
    
    if (username === "admin" && password === "admin") {
      console.log('Login successful');
      history.push('/home');
    } else {
      console.log('Invalid username or password');
    }
  };
  
  const isFormValid = username === "admin" && password === "admin"; // Since we are hardcoding the username and password, the form will always be considered valid.
  

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
            {isFormValid ? (
              <Link to="/home">
                <button onClick={handleSubmit} className="btn btn-primary mx-5">
                   Login
                </button>
              </Link>
            ) : (
              <button className="btn btn-primary mx-5" disabled>
                Login
              </button>
            )}
            <Link to="/signup">
              <button type="button" className="btn btn-success">
                Signup
              </button>
            </Link>
          </center>
        </div>
    </div>
  );
};

export default Login;
