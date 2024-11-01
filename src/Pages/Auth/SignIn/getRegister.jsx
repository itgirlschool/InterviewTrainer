import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../../../Services/fbUsers";

const auth = getAuth();

export default function getRegister(user, setUserError, navigate) {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(data => {
      const infoUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        id: data.user.uid,
        password: user.password,
        avatar: "",
        progress: {
          gradeName: "gradingfirst",
          blocks: [
            { blockName: "videofirst", lastItem: "", blockProgress: 0 },
            { blockName: "theoryfirst", lastItem: "", blockProgress: 0 },
            { blockName: "testsfirst", lastItem: "", blockProgress: 0 },
            { blockName: "interviewfirst", lastItem: "", blockProgress: 0 },
          ],
          totalProgress: 0,
        },
      };
      addUser(infoUser).then(() => navigate("/home"));
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        setUserError(true);
      }
    });
}
