import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../../../Services/fbUsers";

const auth = getAuth();

export default function getRegister(user, setUserError) {


  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => {

      const infoUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        id: data.user.uid,
        password: user.password,
      }
      addUser(infoUser);


    })
    .catch(error => {
      if (error.code == 'auth/email-already-in-use') {
        setUserError(true);
      }
    })}


