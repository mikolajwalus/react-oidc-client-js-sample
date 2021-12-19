import { WebStorageStateStore, UserManager, Log } from "oidc-client";
import { userFound, userLoading, userExpired } from "./../redux/actions";

const config = {
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  authority: "https://localhost:44369",
  client_id: "SampleClient",
  redirect_uri: "https://localhost:3000/callback",
  post_logout_redirect_uri: "https://localhost:3000/signedOut",
  response_type: "token id_token",
  scope: "openid profile",
  automaticSilentRenew: true,
  silent_redirect_uri: "https://localhost:3000/silent-renew",
  accessTokenExpiringNotificationTime: 400,
};

export const loadUser = (dispatch, userManager) => {
  dispatch(userLoading());

  userManager.getUser().then((user) => {
    user && !user.expired ? dispatch(userFound(user)) : dispatch(userExpired());
  });
};

export const createUserManager = () => {
  Log.logger = console;
  Log.level = Log.DEBUG;

  const userManager = new UserManager(config);
  userManager.events.addSilentRenewError((x) =>
    console.log(x, "Silent renew error")
  );
  userManager.events.addUserLoaded((x) => console.log(x, "User loaded"));
  return userManager;
};
