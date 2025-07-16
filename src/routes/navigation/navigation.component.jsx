import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { onSignOut } from "../../utils/firebase/firebase.utils";

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
      <nav>
        <Link to={"/"}>
          <img src={logo} />
        </Link>
        <ul>
          <Link to={"/contact"}>Contact</Link>
          {currentUser ? (
            <>
              <Link onClick={signOut}>Sign Out</Link>
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/cart"}>Cart</Link>
            </>
          ) : (
            <>
              <Link to={"/authentication"}>Sign in</Link>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
