import React from "react";
import "./authentication-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.component";

const AuthenticationPage = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
