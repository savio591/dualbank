import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
