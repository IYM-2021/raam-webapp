import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./css/stylesheet.css"; // import before pages or style gets funky
import Home from "./pages/Home";
import Pledge from "./pages/Pledge";
import About from "./pages/About";
import Samarth from "./pages/Samarth";
import Fraissard from "./pages/Fraissard";
import Oops from "./pages/Oops";
import Haase from "./pages/Haase";
import MacDonald from "./pages/MacDonald";
import Cross from "./pages/Cross";
import Hering from "./pages/Hering";
import Baetz from "./pages/Baetz";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Pledge" component={Pledge} exact />
            <Route path="/About" component={About} exact />
            <Route path="/Samarth" component={Samarth} exact />
            <Route path="/Fraissard" component={Fraissard} exact />
            <Route path="/Haase" component={Haase} exact />
            <Route path="/MacDonald" component={MacDonald} exact />
            <Route path="/Cross" component={Cross} exact />
            <Route path="/Hering" component={Hering} exact />
            <Route path="/Baetz" component={Baetz} exact />
            <Route path="/Oops" component={Oops} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
