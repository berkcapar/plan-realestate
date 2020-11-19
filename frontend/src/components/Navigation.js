import {Link,BrowserRouter} from "react-router-dom"


const Navigation = () => {
  return (
    <BrowserRouter> 
    <div className="nav-container">
    <div className="link-nav-container">
      <div className="make-a-wish-link">
        <Link to="/makeawish"> Make A Wish </Link>
      </div>
      <div className="navbar-logo">
        <Link to="/"> Plan Emlak </Link>
      </div>
    </div>
    <div className="inpage-nav-container">
      <a href="#why-turkey">Why Turkey?</a>
      <a href="#why-plan-emlak">Why Plan Emlak</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
  </BrowserRouter>
  );
};
export default Navigation;
