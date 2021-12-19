import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

export const PrivateRoute = ({ Component, userManager, ...rest }) => {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...{ ...rest, userManager }}
      render={(props) => {
        const isUserAuthenticated = user !== null;

        if (isUserAuthenticated)
          return <Component {...{ ...props, userManager }} />;

        userManager.signinRedirect({
          // pass the current path to redirect to the correct page after successfull login
          // data: { path: location.pathname },
          data: { path: "/" },
        });

        return <p> Wait for you are being redirected </p>;
      }}
    />
  );
};
