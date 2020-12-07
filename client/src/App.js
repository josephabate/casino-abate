import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import War from './pages/War/War';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {

  render() {
    let isAuth = !!sessionStorage.getItem("user");
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/registration" component={Registration} isAuth={!isAuth} redirectTo="/home"/>
              
            <PrivateRoute path="/war" component={War} isAuth={isAuth} redirectTo="/registration" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
