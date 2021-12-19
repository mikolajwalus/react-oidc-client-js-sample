import { useDispatch } from "react-redux";
import App from "./App";
import { Callback } from "./components/Callback";
import { SignoutCallback } from "./components/SignoutCallback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { configureAxios } from "./api/axios";
import { createUserManager, loadUser } from "./api/oidcClient";
import { PrivateRoute } from "./hoc/PrivateRoute";

export const Root = (params) => {
  const userManager = createUserManager();
  configureAxios();
  const dispatch = useDispatch();

  loadUser(dispatch, userManager);

  return (
    <Router>
      <Switch>
        <Route path="/callback">
          <Callback {...{ userManager }} />
        </Route>
        <Route path="/signedOut">
          <SignoutCallback {...{ userManager }} />
        </Route>
        <PrivateRoute path="/" Component={App} userManager={userManager} />
      </Switch>
    </Router>
  );
};
