import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path="/registration" component={Registration}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
