import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// refer to the firebase project that we have to refer to
const firebaseConfig = {
  apiKey: "AIzaSyCtlGrRgg9fdCjsmC6FDyzLxjSHcZAtq-Y",
  authDomain: "e-commerce-db-cdd31.firebaseapp.com",
  projectId: "e-commerce-db-cdd31",
  storageBucket: "e-commerce-db-cdd31.firebasestorage.app",
  messagingSenderId: "1059499071464",
  appId: "1:1059499071464:web:e3c600b598980bd3a2765d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* Firestore related */
export const db = getFirestore();

export async function createEditDb(authenticatedUser) {
    if(!authenticatedUser) return;
    
  const userDocRef = doc(db, "users", authenticatedUser.uid);
  const userSnapsot = await getDoc(userDocRef);
  console.log(userSnapsot.exists());
  /*
if user does not exists.
create /set the doc with the data of user snapshot 
*/
  if (!userSnapsot.exists()) {
    const { displayName, email } = authenticatedUser;
    const createedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createedAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  //if user exists
  //return userDocRef
}

export const createAuthUserWithEmailAndPassword = async ({email, password}) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
