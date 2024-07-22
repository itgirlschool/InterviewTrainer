import { setUsers } from "../slice/UsersSlice";

const middlewareUsers = (database) => {
  return (store) => (next) => (action) => {
    if (action.type === "SUBSCRIBE_TO_USERS") {
      database.ref("users").on("value", (snapshot) => {
        const data = snapshot.val();
        store.dispatch(setUsers(data));
        console.log('1');
      });
      console.log('2');
    }
  };
};

export default middlewareUsers;
