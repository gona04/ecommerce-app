import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.svg";

import './navigation.style.scss';

function Navigation() {
  return (
    <div className="header">
      <nav>
        <Link to={"/"}>
          <img src={logo} />
        </Link>
        <Link to={"/cart"}> Cart </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
