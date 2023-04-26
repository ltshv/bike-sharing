import {
  LOCAL_AUTH_DATA,
  LOCAL_AUTH_TOKEN,
  removeLocalData,
} from "../../../../hooks/useLocalStorage";

export const handleSignOut = () => {
  removeLocalData(LOCAL_AUTH_DATA, null);
  removeLocalData(LOCAL_AUTH_TOKEN, null);
  return {};
};
