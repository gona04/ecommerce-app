import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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
    prompt: 'select_account',
})

export const auth = getAuth(app);

export const logInGoogle = async () => signInWithPopup(auth, provider);

export const emailPasswordSignUp = async ({email, password}) => createUserWithEmailAndPassword(auth, email, password);

/* Firestore related */

export const db = getFirestore();

export async function saveUserDetails(user) {
    const userRef = doc(db, 'users', user.uid);
    const userScreenShot = await getDoc(userRef);

    if(!userScreenShot.exists())  {
        const {displayName, email} = user;
        const createdAt = new Date();
        try {
            setDoc(userRef, {
                displayName,
                email,
                createdAt
            })
        } catch(e) {
            console.log(e.message);
        }
    }
}

export async function emailAndPasswordSignin({email, password})  {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutCustom() {
    return await signOut(auth);
}