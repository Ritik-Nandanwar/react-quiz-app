import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/quiz"} component={Quiz}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

