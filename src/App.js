import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";
import Overview from "./pages/overview";
import Gallery from "./pages/gallery";
import Api from "./pages/api";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Overview" component={Overview} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/api/:id" render={(props) => <Api {...props} />} />
      </Router>
    </>
  );
}
