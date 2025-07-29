import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        // console.log(user);
        setCurrentUser(user);
        navigate("/shop")
      } else {
      navigate("/authentication");}
    });
    return unsubscribe;
  }, [currentUser]);
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
