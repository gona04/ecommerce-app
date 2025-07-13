import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtlGrRgg9fdCjsmC6FDyzLxjSHcZAtq-Y",
  authDomain: "e-commerce-db-cdd31.firebaseapp.com",
  projectId: "e-commerce-db-cdd31",
  storageBucket: "e-commerce-db-cdd31.firebasestorage.app",
  messagingSenderId: "1059499071464",
  appId: "1:1059499071464:web:e3c600b598980bd3a2765d"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth(app);

export function googleLogin(){
  return signInWithPopup(auth, provider);
} 
