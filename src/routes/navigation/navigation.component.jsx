import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { onSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart/cart-icon/cart-icon.component";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function signOut() {
    const result = await onSignOut();
    console.log(result);
    if (result === undefined) {
      setCurrentUser(null);
      navigate("/authentication");
    }
  }
  return (
    <div>
      <div className="nav-container">
        <nav>
          <Link to={"/"}>
            <img id="logo-img" src={logo} />
          </Link>
          <ul>
            <Link to={"/contact"}>Contact</Link>
            {currentUser ? (
              <>
                <Link onClick={signOut}>Sign Out</Link>
                <Link to={"/shop"}>Shop</Link>
              </>
            ) : (
              <>
                <Link to={"/authentication"}>Sign in</Link>
              </>
            )}
          </ul>
          {currentUser && (
            <span className="cart-icon-holder">
              <CartIcon />
            </span>
          )}
        </nav>
      </div>
      <div className='body-styling'>
      <Outlet/>
      </div>
    </div>
  );
};

export default Navigation;
