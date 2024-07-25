import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebaseConfig";
initializeApp(firebaseConfig);

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default function getLogin(email, password, setloginError){

   signInWithEmailAndPassword(auth, email, password)
  .then(() => {
  })
  .catch((error) => {
   
    if(error.code =='auth/invalid-credential'){
        setloginError(true);
    }
  });
 
}
