import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/crown.svg';
import './navigation.scss';
import { UserContext } from "../../context/userContext/user.context";
import { useContext } from "react";
import { signOutCustom } from "../../utils/firebase/firebase.utils";

function Navigation() {
    const {currentUser } = useContext(UserContext);

     async function signOut() {
        console.log('in Sign out')
        console.log(currentUser);
        const result = await signOutCustom()
        console.log('changed',result);
    }
    return (
        <main>
            <nav>
                <Link to={'/'}>
                    <img className="logo" src={logo}/>
                </Link>
                {
                    currentUser ? 
                    (
                    <Link onClick={signOut}> Sign Out </Link>
                    ): (

                <Link to={'/authentication'}>Sign In</Link>
                    )
                }
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/cart'}>Cart</Link>
            </nav>
            <Outlet/>
        </main>
    )
}

export default Navigation;