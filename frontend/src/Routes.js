import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import AdminPanelForm from "./components/AdminPanelForm";
import AllPropertiesList from "./components/AllPropertiesList";
import HomePage from "./components/pages/HomePage";
import AdminPanelAllPropertiesList from "./components/AdminPanelAllPropertiesList";
import AdminPanelPropertyItem from "./components/AdminPanelPropertyItem";

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
          <div>
            <AdminPanel />
          </div>
        </Route>
        <Route path="/adminpanelform">
          <div>
            <AdminPanelForm />
          </div>
        </Route>
        <Route path="/adminpanel-allproperties/:id">
          <div>
            <AdminPanelPropertyItem />
          </div>
        </Route>
        <Route path="/adminpanel-allproperties">
          <div>
            <AdminPanelAllPropertiesList />
          </div>
        </Route>
        <Route path="/showallproperties">
          <div>
            <AllPropertiesList />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
