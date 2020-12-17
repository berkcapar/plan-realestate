import loginService from "../reducers/loginReducer"

export const login = (email, password) => {
  return async (dispatch) => {
    const user = await loginService.login(email, password);
    dispatch({
      type: "USER_LOGGED_IN",
      data: user,
    });
  };
};

const initialState = {
  data: "",
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "USER_LOGGED_IN":
        return{
            data: action.data,
            isLoggedIn: true,
        }
        case "USER_LOGGED_OUT":
        return state
        default: return state
    }
};

export default loginReducer