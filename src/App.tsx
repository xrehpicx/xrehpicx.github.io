import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ContextRender } from "./Contexts/AllContexts";

function App() {
  return (
    <ContextRender>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ContextRender>
  );
}

export default App;
