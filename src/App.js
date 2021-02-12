import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="pageOne" component={PageOne} />
        <Route exact path="pageTwo" component={PageTwo} />
        <Route exact path="pageThree" component={PageThree} />
      </Switch>
    </Router>
  );
}

export default App;
