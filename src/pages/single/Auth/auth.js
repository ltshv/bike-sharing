import React, { useState } from "react";
import css from "./auth.module.scss";
import { SingUp } from "./sing-up/signUp";
import { SingIn } from "./sing-in/signIn";

export const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  return <>{!signUp ? <SingIn setSignUp={()=>setSignUp()} signUp={signUp} /> : <SingUp />}</>;
};
