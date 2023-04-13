export const AUTH_ACTIONS = {
    SIGN_IN: 'SIGN_IN',
    SIGN_IP: 'SIGN_UP',
    GET_AUTH_STATUS: 'GET_AUTH_STATUS',
    GET_AUTH_TOKEN: 'GET_AUTH_TOKEN',
};

export const getSignIn = (email, password) => {
    return {
      type: AUTH_ACTIONS.SIGN_IN,
      email,
      password,
    };
};

export const getSignUp = (email, password, clientId) => {
    return {
      type: AUTH_ACTIONS.SIGN_IN,
      email,
      password,
      clientId,
    };
};

export const getAuthStatus = (status) => {
    return {
      type: AUTH_ACTIONS.SIGN_IN,
      status,
    };
};

export const getAuthToken = (token) => {
    return {
      type: AUTH_ACTIONS.SIGN_IN,
      token,
    };
};