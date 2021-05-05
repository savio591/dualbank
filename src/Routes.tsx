import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <h2>Hello World</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
