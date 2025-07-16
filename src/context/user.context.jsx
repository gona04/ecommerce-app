import { createContext, useEffect, useState } from "react";
import { userAuthUpdates } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser : () => null
})

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = async function returnUnsubscribe() {
            return await userAuthUpdates((user) => setCurrentUser(user))
        }
        return unsubscribe;
    }, [])
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}