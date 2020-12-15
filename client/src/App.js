import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import War from './pages/War/War';
import Roulette from './pages/Roulette/Roulette';
import BlackJack from './pages/BlackJack/BlackJack';
import Slots from './pages/Slots/Slots';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import backgroundMusic from './assets/music/CasinoAbateNoise.mp3';
import {Howl, Howler} from 'howler';

import './App.css';


class App extends Component {

  ifAuth(Component) {
    return !!sessionStorage.getItem("user") ? <Component /> : <Registration />
  }

  play = () =>{
    console.log("Play")
    const sounds = [backgroundMusic]
    const sound = new Howl({
      src: sounds
    });
    sound.play();
  }

  render() {
    Howler.volume(.4);
    return (
      <div className="App">
        {this.play()}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/war" component={War} />
            <Route exact path="/roulette" component={Roulette} />
            <Route exact path="/blackjack" component={BlackJack} />
            <Route exact path="/Slots" component={Slots} />
            <Route exact path="/forget-password" component={ForgetPassword} />
            <Route exact path="/reset-password/:id" component={ResetPassword} />
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