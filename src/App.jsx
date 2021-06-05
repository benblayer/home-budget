import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";
import BudgetState from "./context/budget/BudgetState";

function App() {
  return (
    <div className='App'>
      <BudgetState>
        <Router>
          <Navbar appName='Home Budget' />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
      </BudgetState>
    </div>
  );
}

export default App;
