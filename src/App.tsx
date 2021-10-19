import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import NotFound from "./components/NotFound";
import Work from "./components/Work";
import { ContextRender } from "./Contexts/AllContexts";

function App() {
  return (
    <ContextRender>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work/:work">
            <Work />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ContextRender>
  );
}

export default App;
