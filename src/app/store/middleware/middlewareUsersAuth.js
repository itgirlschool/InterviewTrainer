import { setUser } from "../slice/UserAuthSlice.js";

const middlewareUsers = database => {
  return store => next => action => {
    if (action.type === "SUBSCRIBE_TO_USER") {
      console.log("Subscribed to user updates...");
      database.ref("users").on("value", snapshot => {
        console.log("Firebase value updated:", snapshot.val());
        const data = Object.values(snapshot.val());
        const { displayName, email, id, password, lastName, firstName, progress } =
          data.find(user => user.email === action.emailUser);
        console.log(data);
        store.dispatch(
          setUser({
            email,
            password,
            displayName,
            id,
            lastName,
            firstName,
            progress,
          }),
        );
      });
    }
    return next(action);
  };
};
export default middlewareUsers;
