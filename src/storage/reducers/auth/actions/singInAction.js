import { setLocalData, LOCAL_AUTH_DATA, LOCAL_AUTH_TOKEN } from "../../../../hooks/useLocalStorage";
import axios from "axios";

export function handleSignInAction(email, password) {
    try {
      const data =  axios
        .post(`https://sf-final-project-be.herokuapp.com/api/auth/sign_in`, {
          email,
          password,
        })
        .then((response) => {
          if (response.data.status === "OK") {
            const responseData = response.data.data;
            setLocalData(LOCAL_AUTH_TOKEN, responseData.token);
            setLocalData(LOCAL_AUTH_DATA, responseData.user);
            return responseData;
          } else {
            return {};
          }
        });
      return data;
    } catch (err) {
      console.error("sing in error", err);
    }
  }