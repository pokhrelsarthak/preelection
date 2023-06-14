// // Signup.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [errors, setErrors] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     if (!username) {
//       setErrors({ username: 'username is required' });
//       return;
//     }
//     if (!password) {
//       setErrors({ password: 'Password  required' });
//       return;
//     }
//     if (password !== confirmPassword) {
//       setErrors({ confirmPassword: 'Passwords do not match' });
//       return;
//     }

//     const signupData = {
//       'username':username,
//       'password':password,
//     };
//     console.log(signupData);
//     alert('User Added');

//     axios.post('http://localhost:8080/signup/save', signupData)
//       .then(response => {
//         console.log('Response:', response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

    
//     // Reset form fields
//     setUsername('');
//     setPassword('');
//     setConfirmPassword('');
//     setErrors({});
//   };

//   // const isFormValid = username && password && password === confirmPassword;

//   return (
//     <div style={{marginTop:'30px'}}>
//       <center>
//         <h2>Sign Up</h2>
//         <form >
//           <div >
//             <label style={{position: 'relative',paddingRight:'10px'}}>Username:</label>
//             <input
//               type="text"
//               required 
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
              
//             />
//           <span >{errors.username && <span className="error" style={{ position: 'fixed', marginTop:'9px', paddingLeft: '10px' }} >
//             {errors.username}</span>}</span>
//           </div>
//           <div>
//             <label style={{position: 'relative',paddingRight:'10px'}}>Password:</label>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.password && <span className="error" style={{ position: 'fixed', marginTop:'9px', paddingLeft: '10px' }}>{errors.password}</span>}
//           </div>
//           <div>
//             <label style={{position: 'relative',paddingRight:'20px'}}>Confirm Password:</label>
//             <input
//               type="password"
//               required
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               style={{position: 'relative',marginLeft:'0px',paddingRight:'0px'}}
//             />
//             {errors.confirmPassword && (
//               <span className="error" style={{ position: 'fixed', marginTop:'9px', paddingLeft: '10px' }}>{errors.confirmPassword}</span>
//             )}
//           </div>
//           <center>
//               <Link to="/Login">
//                 <button onClick={handleSubmit}  type="submit" className="btn btn-success">
//                   Submit
//                 </button>
//               </Link>
//           </center>
//         </form>
//       </center>
//     </div>
//   );
// };

// export default Signup;





// Signup.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!username) {
      setErrors({ username: 'Username is required' });
      return;
    }
    if (!password) {
      setErrors({ password: 'Password is required' });
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    const signupData = {
      username: username,
      password: password,
    };

    axios
      .post('http://localhost:8080/signup/save', signupData)
      .then(response => {
        console.log('Response:', response.data);
        alert('User Added');
        history.push('/login'); // Navigate to Login page
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Reset form fields and errors
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <center>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label style={{ position: 'relative', paddingRight: '10px' }}>Username:</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <span className="error" style={{ position: 'fixed', marginTop: '9px', paddingLeft: '10px' }}>
                {errors.username}
              </span>
            )}
          </div>
          <div>
            <label style={{ position: 'relative', paddingRight: '10px' }}>Password:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error" style={{ position: 'fixed', marginTop: '9px', paddingLeft: '10px' }}>
                {errors.password}
              </span>
            )}
          </div>
          <div>
            <label style={{ position: 'relative', paddingRight: '20px' }}>Confirm Password:</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ position: 'relative', marginLeft: '0px', paddingRight: '0px' }}
            />
            {errors.confirmPassword && (
              <span className="error" style={{ position: 'fixed', marginTop: '9px', paddingLeft: '10px' }}>
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <center>
            <button onClick={handleSubmit} type="submit" className="btn btn-success">
              Submit
            </button>
          </center>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </center>
    </div>
  );
};

export default Signup;
