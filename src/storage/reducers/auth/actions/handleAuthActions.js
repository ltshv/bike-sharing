import { AUTH_ACTIONS } from "../auth-actions";
import {
  getLocalData,
  isLocalData,
  LOCAL_AUTH_DATA,
  LOCAL_AUTH_TOKEN,
} from "../../../../hooks/useLocalStorage";
import { handleSignInAction } from "./singInAction";

// const initialState = {
//   authData: {
//     token: getAuthData().token || null,
//     user: getAuthData().user || null,
//   },
// };
const initialState = {
  authData: {
    token: null,
    user: null,
  },
};

function getAuthStatus() {
  if (isLocalData(LOCAL_AUTH_TOKEN)) {
    return true;
  }
  return false;
}

function getAuthData() {
  if (getAuthStatus) {
    return {
      token: getLocalData(LOCAL_AUTH_TOKEN),
      user: getLocalData(LOCAL_AUTH_DATA),
    };
  }
}

const options = {
  headers: {
    Authorization: `Bearer`,
  },
};

function handleAuthActions(state = initialState, action) {
  
  switch (action.type) {
    case AUTH_ACTIONS.SIGN_IN:
      console.log('handle auth result ',handleSignInAction(action.email, action.password).then(result => {return result.user}));
      const token = handleSignInAction(action.email, action.password).then((result) => {return result.token});
      const user = handleSignInAction(action.email, action.password).then(result => {return result.user});
      return {
        ...state,
        authData: {token,user},
      };
    case AUTH_ACTIONS.SIGN_UP:
      return {
        ...state,
        authData: {
          ...handleSignInAction(),
          clientID: action.clientId,
        },
      };
    default:
      return state;
  }
}

export default handleAuthActions;
