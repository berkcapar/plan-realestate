import { Link, BrowserRouter } from "react-router-dom";

const Navigation = () => {

/* let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  
  navBarToggle.addEventListener('click', function () {
      
      mainNav.classList.toggle('active');
  }); */

  return (
    <BrowserRouter>
      <div className="nav-container">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <div className="navbar-logo-container"> 
        <Link className="navbar-logo" to="/">
          PLAN EMLAK
        </Link>
        </div>
        <ul className="nav-elements" id="js-menu">
          <li>
            {" "}
            <Link className="nav-links" to="/makeawish">
              Make A Wish
            </Link>
          </li>
          <li>
            <a className="nav-links" href="#why-turkey">
              Why Turkey?
            </a>
          </li>
          <li>
            {" "}
            <a className="nav-links" href="#why-plan-emlak">
              Why Plan Emlak
            </a>
          </li>
          <li>
            {" "}
            <a className="nav-links" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
};
export default Navigation;
