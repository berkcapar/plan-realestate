import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, persistAuthentication } from "../redux/reducers/loginReducer";
import { showNotification } from "../redux/reducers/notificationReducer";
import { getLoggedInfoFromState } from "../redux/selectors";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(getLoggedInfoFromState);

  useEffect(() => {
    dispatch(persistAuthentication());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/adminpanelform");
    }
  }, [history, isLoggedIn]);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(login(email, password));
  };

  return (
    <div className="loginarea">
      <h2>PlanoEmlak Admin Panel Sayfasına Hoşgeldiniz!</h2>
      <form className="loginform" onSubmit={handleLogin}>
        <div className="emailpassword">
          <div className="emailtext">
            Email:
            <input className="emailinput" name="email" />
          </div>
          <div className="passwordtext">
            Password:
            <input className="passwordinput" name="password" />
          </div>
        </div>
        <button className="loginbutton" type="submit">
          Log in!
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
