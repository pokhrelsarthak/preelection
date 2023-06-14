import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Home from "./components/home";
import Charts from "./components/Charts";
import Reports from "./components/Reports"
import Table1 from "./components/Table1";
import Table2 from './components/Table2';
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";
import Table5 from "./components/Table5";
import Cabinet from "./components/Cabinet";

function App() {
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <Router>
      <Header render={render}/>
      <div>
        <Switch>
          <Route path="/signup">
            <Signup setRender={setRender}/>
          </Route>
          <Route exact path="/">
            <Login setRender={setRender} />
          </Route>
          <Route path="/home">
            <Home setRender={setRender}/>
          </Route>
          <Route path="/Login">
            <Login setRender={setRender}/>
          </Route>
          <Route path="/charts">
            <Charts setRender={setRender}/>
          </Route>
          <Route path="/reports">
            <Reports setRender={setRender}/>
          </Route>
          <Route path="/cabi">
            <Cabinet setRender={setRender}/>
          </Route>
          <Route path="/table1">
            <Table1 setRender={setRender}/>
          </Route>
          <Route path="/table2">
            <Table2 setRender={setRender}/>
          </Route>
          <Route exact path="/table3">
            <Table3 setRender={setRender}/>
          </Route>
          <Route exact path="/table4">
            <Table4 setRender={setRender}/>
          </Route>
          <Route exact path="/table5">
            <Table5 setRender={setRender}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;