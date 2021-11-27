import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import { DebugIndicator } from "./components/DebugIndicator";
import { Home } from "./components/Home";
import { Con } from "./components/Con";
import NotFound from "./components/NotFound";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import CLI from "./components/CLI";
import LoginHandler from "./components/Editor/LoginHandler";
import Stories from "./components/Stories";
import Notion from "./components/Notion";
import { ContextRender } from "./Contexts/AllContexts";

function App() {
  return (
    <ContextRender>
      <Router>
        <AnimateSharedLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cli">
              <CLI />
            </Route>
            <Route path="/blog/:id">
              <Notion />
            </Route>
            <Route path="/blog">
              <Notion />
            </Route>
            <Route path="/page/:id">
              <Notion />
            </Route>
            <Route path="/pages">
              <Notion />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/con">
              <Con />
            </Route>
            <Route path="/work/:work">
              <Work />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/login">
              <LoginHandler />
            </Route>
            <Route path="/stories">
              <Stories />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AnimateSharedLayout>
        <DebugIndicator />
      </Router>
    </ContextRender>
  );
}

export default App;
