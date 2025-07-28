import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./navigation.scss";
import { UserContext } from "../../context/userContext/user.context";
import { useContext, useState } from "react";
import { signOutCustom } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart/cart-icon/cart-icon.component";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const [popUpOpen, setPopUpOpen] = useState(false);


  async function signOut() {
    console.log("in Sign out");
    console.log(currentUser);
    const result = await signOutCustom();
    console.log("changed", result);
  }

  return (
    <main>
      <nav>
        <Link to={"/"}>
          <img className="logo" src={logo} />
        </Link>
        <Link to={"/contact"}>Contact</Link>
        {currentUser ? (
          <>
            <Link onClick={signOut}> Sign Out </Link>
            <Link to={"/shop"}>Shop</Link>
            <Link
              onClick={() => {
                setPopUpOpen((v) => !v);
              }}
            >
              <CartIcon isOpen={popUpOpen} />
            </Link>
          </>
        ) : (
          <Link to={"/authentication"}>Sign In</Link>
        )}
      </nav>
      <Outlet />
    </main>
  );
}

export default Navigation;
