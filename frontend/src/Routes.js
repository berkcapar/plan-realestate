import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import AdminPanelForm from "./components/AdminPanelForm";
import AllPropertiesList from "./components/AllPropertiesList";
import HomePage from "./components/pages/HomePage";
import AdminPanelAllPropertiesList from "./components/AdminPanelAllPropertiesList";
import AdminPanelPropertyPage from "./components/pages/AdminPanelPropertyPage";
import SearchResults from "./components/pages/SearchResults";
import Navigation from "./components/Navigation/Navigation";
import PropertyDetail from "./components/pages/PropertyDetail/PropertyDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <HomePage />
        </Route>
        <Route path="/makeawish">
          <Navigation />
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
            <AdminPanelPropertyPage />
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
        <Route path="/searchresults">
          <div>
            <Navigation />
            <SearchResults />
          </div>
        </Route>
        <Route path="/properties/:id">
          <div>
            <Navigation />
            <PropertyDetail />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
