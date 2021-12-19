import { useDispatch } from "react-redux";
import { userExpired } from "./../redux/actions";
import { useHistory } from "react-router";

export const SignoutCallback = ({ userManager }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  userManager.signoutRedirectCallback().then(() => {
    dispatch(userExpired());
    history.push("/");
  });

  return <p>You are signed out</p>;
};
