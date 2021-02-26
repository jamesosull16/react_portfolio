import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <div>
        
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;
