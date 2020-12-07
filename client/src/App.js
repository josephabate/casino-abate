import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/registration" component={Registration}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
