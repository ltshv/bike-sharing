export const SESSION_ANIMALS_DATA = 'session-animals';
export const LOCAL_AUTH_TOKEN = 'auth-token';
export const LOCAL_AUTH_DATA = 'auth-data';

export const isLocalData = (LOCAL_TITLE = String()) => window.localStorage.getItem(LOCAL_TITLE) !== null && window.localStorage.getItem(LOCAL_TITLE) !== undefined && JSON.parse(window.localStorage.getItem(LOCAL_TITLE)).length > 0;

export const getLocalData = (LOCAL_TITLE = String()) => {
    return JSON.parse(window.localStorage.getItem(LOCAL_TITLE));
}

export const setLocalData = (LOCAL_TITLE = String(), data) => {
    window.localStorage.setItem(LOCAL_TITLE, JSON.stringify(data));
}

export const isSessionData = (LOCAL_TITLE = String()) => window.sessionStorage.getItem(LOCAL_TITLE) !== null && window.sessionStorage.getItem(LOCAL_TITLE) !== undefined && JSON.parse(window.sessionStorage.getItem(LOCAL_TITLE)).length > 0;

export const getSessionData = (LOCAL_TITLE = String()) => {
    return JSON.parse(window.sessionStorage.getItem(LOCAL_TITLE));
}

export const setSessionData = (LOCAL_TITLE = String(), data) => {
    window.sessionStorage.setItem(LOCAL_TITLE, JSON.stringify(data));
}