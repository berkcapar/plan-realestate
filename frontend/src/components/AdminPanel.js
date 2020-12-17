import { useDispatch } from "react-redux"
import {login} from "../redux/reducers/loginReducer"
import {showNotification} from "../redux/reducers/notificationReducer"

const AdminPanel = () => {

    const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try{
        dispatch(login(email,password))
    } catch(error){
        dispatch(showNotification('Kullanıcı Adı/Şifre yanlış'))
    }
  };

  return (
    <div className="loginarea">
      <h2>PlanEmlak Admin Panel Sayfasına Hoşgeldiniz!</h2>
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
