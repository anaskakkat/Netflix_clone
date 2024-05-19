import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa10guSTSDuBR2ibF7GBkdRG0svmNIidA",
  authDomain: "netflix-clone-257aa.firebaseapp.com",
  projectId: "netflix-clone-257aa",
  storageBucket: "netflix-clone-257aa.appspot.com",
  messagingSenderId: "311425158219",
  appId: "1:311425158219:web:94253cd460e17c8b47d1ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    console.log("response:", user);
    const userCollectionRef = collection(db, "users");

    await addDoc(userCollectionRef, {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password,
    });
    console.log("User added to Firestore");
  } catch (error) {
    console.log("create collection error", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, signUp, logout };
