import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebaseConfig";
initializeApp(firebaseConfig);
const auth = getAuth();

export const Login=(email, password)=>{

   signInWithEmailAndPassword(auth, email, password)
  .then((data) => {
    // Signed in 
   console.log(data);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " "+ errorMessage);
  });
 
}