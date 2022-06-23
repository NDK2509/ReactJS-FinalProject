import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const LoginPage = () => {
  const LOGIN_KEY = "ReactJSLogin";

  const handleResponse = (response) => {
    const data = jwtDecode(response.credential);
    console.log(data);
    setIsLogedIn({ status: data.email_verified, data });
    Cookies.set(LOGIN_KEY, response.credential);
  };
  const [isLogedIn, setIsLogedIn] = useState({
    status: false,
    data: null,
  });
  useEffect(() => {
    /* global  google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleResponse,
      cancel_on_tap_outside: false,
    });
    google.accounts.id.renderButton(
      document.getElementById("gg-login-btn"),
      { theme: "outline", size: "large" } // customization attributes
    );
  }, []);
  return <div id="gg-login-btn"></div>;
};
export default LoginPage;
