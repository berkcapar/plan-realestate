import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
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
        <Route path="/adminpanel">
          <div><AdminPanel/></div>
        </Route>
      </Switch>
      </BrowserRouter>
  
  );
};

export default Routes;
