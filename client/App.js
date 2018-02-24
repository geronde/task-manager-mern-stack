import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import components
import Home from "./components/Home";
import Board from "./components/Lists/Board";
import About from "./components/About/About";
import style from "./css/styles.css";


// define routes
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/p/:projectId/:projectName" component={Board} />
          <Route path="/about" component={About} />
          <Route path="/404" render={() => <h2>Link not found</h2>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
