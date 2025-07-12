import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/crown.svg';
import './navigation.scss';

function Navigation() {
    return (
        <main>
            <nav>
                <Link to={'/'}>
                    <img className="logo" src={logo}/>
                </Link>
                <Link to={'/sign-in'}>Sign In</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/cart'}>Cart</Link>
            </nav>
            <Outlet/>
        </main>
    )
}

export default Navigation;