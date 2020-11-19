import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      </Switch>
      </BrowserRouter>
  
  );
};

export default Routes;
