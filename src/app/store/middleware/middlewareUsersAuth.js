import { setUser } from "../slice/UserAuthSlice.js";

const middlewareUsers = database => {
  return store => next => action => {
    if (action.type === "SUBSCRIBE_TO_USER") {
      database.ref("users").on("value", snapshot => {
        const data = Object.values(snapshot.val());
        const dataObj = data.find(user => {
            if (user.key) {
              return user.email === action.emailUser;
            }
          });
        if (!dataObj) return;
        const { displayName, email, id, password, lastName, firstName, progress, avatar } = dataObj;

        store.dispatch(
          setUser({
            email,
            password,
            displayName,
            id,
            lastName,
            firstName,
            progress,
            avatar,
          }),
        );
      });
    }
    return next(action);
  };
};
export default middlewareUsers;
