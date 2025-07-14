import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => { 
  return (
    <div>
      <nav>
        <Link to={'/'}>
             <img src={logo} />
        </Link>
        <ul>
            <Link to={'/shop'} >Shop</Link>
            <Link to={'/contact'} >Contact</Link>
            <Link to={'/authentication'} >Sign in</Link>
            <Link to={'/cart'}>Cart</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;