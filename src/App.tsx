import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
    </Router>
  );
}

export default App;
