import Login from "../screens/Login";
import PersonalDetails from "../screens/PersonalDetails";
import Home from "../screens/dashboard/Home";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/get-started">
            <PersonalDetails />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
