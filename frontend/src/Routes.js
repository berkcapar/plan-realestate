import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import AdminPanelForm from "./components/AdminPanelForm";
import HomePage from "./components/pages/HomePage";

const Routes = () => {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/makeawish">
          <div>Make A Wish</div>
        </Route>
        <Route path="/adminpanellogin">
          <div><AdminPanel/></div>
        </Route>
        <Route path="/adminpanelform">
          <div><AdminPanelForm/></div>
        </Route>
      </Switch>
      </BrowserRouter>
  
  );
};

export default Routes;
