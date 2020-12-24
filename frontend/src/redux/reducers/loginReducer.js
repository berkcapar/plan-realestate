import loginService from "../../services/login";
import propertyService from "../../services/property";
import { showNotification } from "../reducers/notificationReducer";

const cacheLoggedInUser = (admin) => {
  window.localStorage.setItem("loggedAdmin", JSON.stringify(admin));
  propertyService.setToken(admin.token);
};

const retrieveLoggedInUserFromCache = () => {
  const loggedAdminJSON = window.localStorage.getItem("loggedAdmin");
  if (loggedAdminJSON) {
    return JSON.parse(loggedAdminJSON);
  }
};

export const persistAuthentication = () => {
  return async (dispatch) => {
    const admin = retrieveLoggedInUserFromCache();

    if (admin) {
      cacheLoggedInUser(admin);
      dispatch({
        type: "USER_LOGGED_IN",
        data: admin,
      });
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await loginService.login(email, password);
      cacheLoggedInUser(response);
      dispatch({
        type: "USER_LOGGED_IN",
        data: response,
      });
    } catch (e) {
      dispatch(showNotification("Kullanıcı Adı/Şifre yanlış"));
    }
  };
};

const initialState = {
  data: "",
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        data: action.data,
        isLoggedIn: true,
      };
    case "USER_LOGGED_OUT":
      return state;
    default:
      return state;
  }
};

export default loginReducer;
