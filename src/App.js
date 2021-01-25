import React, { Component } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux"; // Redux Provider
import store from "./store";

import "./css/stylesheet.css"; // import before pages or style gets funky
import Home from "./pages/Home";
import India from "./pages/India";
import Rwanda from "./pages/Rwanda";

// import DashboardPage from "./pages/DashboardPage";
// import FanPage from "./pages/FanPage";
// import FanDataPage from "./pages/FanDataPage";
// import ErrorPage from "./pages/ErrorPage";

// import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/India" component={India} exact />
            <Route path="/Rwanda" component={Rwanda} exact />
          </Switch>
        </BrowserRouter>
      </Provider>

      //Fan experience page. This is the first page that will load. For Dashboard access for now
      //we will have to add /dashboardRAAMforVIPaccess to out http

      //Removing the extact will show both the fan page and dash page together
      //which we might need later to avoid multiple same implementations.
      //For development purpose I have added the exact.
      // <Provider store={store}>
      //   <BrowserRouter>
      //     <Switch>
      //       <Route path="/" component={FanPage} exact />
      //       <Route path="/FanData" component={FanDataPage} exact />
      //       <Route path="/dashboardRAAMforVIPaccess" component={DashboardPage} exact/>
      //       <Route component={ErrorPage} />
      //     </Switch>
      //   </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
