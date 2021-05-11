import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { Balance } from "./pages/Balance";

const Routes = () => {
  const { hostname } = document.location;
  const isSavilExperimentsSite = hostname === "savilexperiments.com.br";
  const appPath = isSavilExperimentsSite ? "/dualbank" : "/";

  return (
    <BrowserRouter>
      <Switch>
        <Route path={appPath} exact component={Balance}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
