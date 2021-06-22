import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import BudgetState from "./context/budget/BudgetState";
import BudgetPage from "./pages/BudgetPage";

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
            <Route path='/budget'>
              <BudgetPage></BudgetPage>
            </Route>
          </Switch>
        </Router>
      </BudgetState>
    </div>
  );
}

export default App;
