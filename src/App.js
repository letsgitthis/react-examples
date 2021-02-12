import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/NavTabs'
import Home from './components/pages/Home';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import PageThree from './components/pages/PageThree';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/pageOne" component={PageOne} />
        <Route exact path="/pageTwo" component={PageTwo} />
        <Route exact path="/pageThree" component={PageThree} />
      </div>
    </Router>
  );
}

export default App;
