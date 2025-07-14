import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        console.log(user);
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
