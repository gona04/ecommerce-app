import {initializeApp} from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const config =  {
  apiKey: "AIzaSyCtlGrRgg9fdCjsmC6FDyzLxjSHcZAtq-Y",
  authDomain: "e-commerce-db-cdd31.firebaseapp.com",
  projectId: "e-commerce-db-cdd31",
  storageBucket: "e-commerce-db-cdd31.firebasestorage.app",
  messagingSenderId: "1059499071464",
  appId: "1:1059499071464:web:e3c600b598980bd3a2765d"
};

const app = initializeApp(config);

//FOR AUTHENTICATION
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth(app);

export async function signInGoogle() {return await signInWithPopup(auth, provider)}

export async function emailPasswordSignup(email, password) {return await createUserWithEmailAndPassword(auth, email, password)}

export async function emailPasswordSignin(email, password) {return await signInWithEmailAndPassword(auth, email, password)}

export async function userAuthUpdates(callback) { return await onAuthStateChanged(auth, callback) }

export async function onSignOut() {return await signOut(auth)}
//FOR FIRESTORE

export const db = getFirestore();

export async function createUser(user) {
  const userRef = doc(db, 'users', user.uid);
  const userScreenShot = await getDoc(userRef);

  if(!userScreenShot.exists()) {
    const {displayName, email} = user;
    const createdAt = new Date();
    try {
     await setDoc(userRef,{
        displayName,
        email,
        createdAt
      })
    } catch(e) {
      console.log(e.message);
    }
  }
}

//Adding complete collection
export const addCollection = async (collectionKay, ObjToAdd) => {
  const collectionRef = collection(db, collectionKay);
  const batch = writeBatch(db);

  ObjToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  batch.commit();
  console.log('done');
}

//GET DATA FROM FIRESTORE
export async function getCategoriesAndDocuents() {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshop = await getDocs(q);
  const categoryMap = querySnapshop.docs.reduce((acc, docSnapshot)=> {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
  return categoryMap;
}