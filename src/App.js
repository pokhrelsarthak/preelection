import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Home from "./components/home"; // Import the Home component
import Charts from "./components/Charts";
import Reports from "./components/Reports"
import Table1 from "./components/Table1";
import Table2 from './components/Table2';
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";
import Table5 from "./components/Table5";

function App() {
  const [signupData, setSignupData] = useState([]);

  const handleSignup = (data) => {
    setSignupData([...signupData, data]);
    console.log('Signupdata:', signupData);
  };

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/signup">
            <Signup handleSignup={handleSignup} />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login signupData={signupData} />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/table1">
            <Table1 />
          </Route>
          <Route path="/table2">
            <Table2 />
          </Route>
          <Route exact path="/table3">
            <Table3 />
          </Route>
          <Route exact path="/table4">
            <Table4 />
          </Route>
          <Route exact path="/table5">
            <Table5 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Header from "./components/Header";
// import Home from "./components/home";

// function App() {
//   const [signupData, setSignupData] = useState([]);

//   const handleSignup = (data) => {
//     setSignupData([...signupData, data]);
//     console.log('Signupdata:', signupData);
//   };

//   return (
//     <Router>
//       <Header />
//       <div>
//         <Switch>
//           <Route path="/signup">
//             <Signup handleSignup={handleSignup} />
//           </Route>
//           <Route exact path="/">
//             <Login />
//           </Route>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Redirect to="/home" /> {/* Add a redirect route to handle unknown routes */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
