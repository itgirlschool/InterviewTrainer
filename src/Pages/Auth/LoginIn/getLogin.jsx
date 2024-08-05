import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default function getLogin(email, password, setloginError,navigate){

   signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigate('/home');
  })
  .catch((error) => {
    console.log(error);
    if(error.code =='auth/invalid-credential'){
      
        setloginError(true);
    }
  });
 
}
