import { TopBar } from "./components/TopBar";
import { Public } from "./components/Public";
import { Private } from "./components/Private";
import { Route, Switch } from "react-router-dom";

function App({ userManager }) {
  const handleLogin = () => {
    userManager.signinRedirect();
  };

  const handleLogout = () => {
    userManager.signoutRedirect();
  };

  return (
    <>
      <TopBar {...{ handleLogin, handleLogout }} />
      <Switch>
        <Route path="/private">
          <Private />
        </Route>
        <Route path="/public">
          <Public />
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </>
  );
}

export default App;
