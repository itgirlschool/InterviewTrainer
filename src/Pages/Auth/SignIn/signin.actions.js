import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../../firebaseConfig";
import { addUser } from "../../../Services/fbUsers";

initializeApp(firebaseConfig);
const auth = getAuth();

export const Register = (user) => {
   
    return async (dispatch) => {

        createUserWithEmailAndPassword( auth, user.email, user.password)
        .then((data) => {
            console.log(data);
         //const userData = data.user;
/*
          const infoUser= {
            firstName: data.firstName,
            lastName: data.lastName,
            displayName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            uid: data.user.uid,
            id: data.id,
            password: data.password,
            createdAt: new Date()
          }*/
        
           // addUser(userData);
           
         
        })
        .catch(error => {
                console.log('Ошибка: ' + error);
            })
    }

    
}