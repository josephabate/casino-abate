import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import War from './pages/War/War';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {

    ifAuth(Component){
      return !!sessionStorage.getItem("user") ? <Component/> : <Registration/>
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/war" component={War} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/**
 *             <PrivateRoute path="/registration" component={Registration} redirectTo="/"/>
              
            <PrivateRoute path="/war" component={War} redirectTo="/registration" />
 */