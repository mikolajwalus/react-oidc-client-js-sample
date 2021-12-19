import { useDispatch } from "react-redux";
import { userFound } from "./../redux/actions";
import { useHistory } from "react-router-dom";

export const Callback = ({ userManager }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  userManager.signinRedirectCallback().then((user) => {
    dispatch(userFound(user));
    const redirectPath = user?.state?.path || "/";

    history.push(redirectPath);
  });

  return <p>Callback</p>;
};
