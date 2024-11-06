import { setUsers } from "../slice/UsersSlice";

const middlewareUsers = (database) => {
  return (store) => (next) => (action) => {
    if (action.type === "SUBSCRIBE_TO_USERS") {
      database.ref("users").on("value", (snapshot) => {
        const data = snapshot.val();
        if(!data)return next(action);
        store.dispatch(setUsers(data));
      });
    }
    return next(action);
  };
};
export default middlewareUsers;
