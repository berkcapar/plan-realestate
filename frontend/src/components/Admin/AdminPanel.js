import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  login,
  persistAuthentication,
} from "../../redux/reducers/loginReducer";
import { getLoggedInfoFromState } from "../../redux/selectors";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(getLoggedInfoFromState);

  const [showPassword, setShowPassword] = useState(false);

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
  const handleClickShowPassword = () => {
    setShowPassword({ ...showPassword, showPassword: !showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box display="flex" mx="auto" flexDirection="column" width="50%">
      <h2>Plan Emlak Admin Panel Sayfasına Hoşgeldiniz!</h2>
      <form onSubmit={handleLogin}>
        <Box display="flex" flexDirection="column" width="30%">
          <TextField label="Email" required name="email" />
          <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <button className="loginbutton" type="submit">
            Log in!
          </button>
        </Box>
      </form>
    </Box>
  );
};

export default AdminPanel;
