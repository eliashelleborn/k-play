import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";

import Home from "../../pages/Home";
import Library from "../../pages/Library";
import Login from "../../pages/Login";
import Play from "../../pages/Play";
import Search1 from "../../pages/Search1";
import Search2 from "../../pages/Search2";
import SignUp from "../../pages/SignUp";

import Error from "../../pages/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path="/k-play" component={Home} />
          <Route path="/bibliotek" component={Library} />
          <Route path="/logga-in" component={Login} />
          <Route path="/spela-upp" component={Play} />
          <Route path="/sök" component={Search1} />
          <Route path="/sök2" component={Search2} />
          <Route path="/skapa-konto" component={SignUp} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
