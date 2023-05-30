// import React, { useState } from 'react';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// const Signup = ({ handleSignup }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform form submission logic here
//     // Validate the form fields and handle any errors
//     if (!username) {
//       setErrors({ username: 'Username is required' });
//       return;
//     }
//     if (!password) {
//       setErrors({ password: 'Password is required' });
//       return;
//     }
//     if (password !== confirmPassword) {
//       setErrors({ confirmPassword: 'Passwords do not match' });
//       return;
//     }
//     // Store the signup data or perform further actions
//     const signupData = {
//       username,
//       password,
//     };
//     handleSignup(signupData);

//     // Reset form fields
//     setUsername('');
//     setPassword('');
//     setConfirmPassword('');
//     setErrors({});
//   };

//   return (
//     <div>
//       <center>
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             {errors.username && <span className="error">{errors.username}</span>}
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </div>
//           <div>
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             {errors.confirmPassword && (
//               <span className="error">{errors.confirmPassword}</span>
//             )}
//           </div>
//           <center>
//           <Link to="/Login"><button type="button" className="btn btn-success">Submit</button></Link>
//             {/* <button type="submit">Submit</button> */}
//           </center>
//         </form>
//       </center>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';

const Signup = ({ handleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');
  const history = useHistory();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // Validate the form fields and handle any errors
    if (!username) {
      setErrors({ username: 'username is required' });
      return;
    }
    if (!password) {
      setErrors({ password: 'Password  required' });
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }
    // Store the signup data or perform further actions
    const signupData = {
      username,
      password,
    };
    handleSignup(signupData);
    // Reset form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});

    history.push('/Login');
  };

  // const isFormValid = username && password && password === confirmPassword;

  return (
    <div>
      <center>
        <h2>Sign Up</h2>
        <form >
          <div >
            <label style={{position: 'relative',paddingRight:'10px'}}>Username:</label>
            <input
              type="text"
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              
            />
          <span >{errors.username && <span className="error" style={{ position: 'fixed', marginTop:'9px', paddingLeft: '10px' }} >
            {errors.username}</span>}</span>
          </div>
          <div>
            <label style={{position: 'relative',paddingRight:'10px'}}>Password:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error" style={{ position: 'fixed', marginTop:'9px', paddingLeft: '10px' }}>{errors.password}</span>}
          </div>
          <div>
            <label style={{position: 'relative',paddingRight:'20px'}}>Confirm Password:</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{position: 'relative',marginLeft:'0px',paddingRight:'0px'}}
            />
            {errors.confirmPassword && (
              <span className="error" style={{ position: 'fixed', marginTop:'9px', paddingLeft: '10px' }}>{errors.confirmPassword}</span>
            )}
          </div>
          <center>
              <Link to="Login">
                <button onClick={handleSubmit}  type="submit" className="btn btn-success">
                  Submit
                </button>
              </Link>
          </center>
        </form>
      </center>
    </div>
  );
};

export default Signup;
