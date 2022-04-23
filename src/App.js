import "./App.css";
import Deafult from "./Deafult";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Events from "./events/Events";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Deafult />; */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Deafult />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
