import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebaseConfig";
import { addUser } from "../../../Services/fbUsers";


initializeApp(firebaseConfig);
const auth = getAuth();

export const Register = (user) => {

    return async () => {

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(() => {
               
              
                
                          const infoUser= {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            displayName: `${user.firstName} ${user.lastName}`,
                            email: user.email,
                            id: user.id,
                            password: user.password,
                          }

                           addUser(infoUser);
                          console.log(infoUser);

            })
            .catch(error => {
                console.log('Ошибка: ' + error);
            })
    }


}