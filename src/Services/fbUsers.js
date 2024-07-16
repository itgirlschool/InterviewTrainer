import { database } from "../app/store";

export const addUser = (user) => {
  try {
    const ref = database.ref("users").push();
    const { key } = ref;
    ref.set({ ...user, key });
  } catch (err) {
    console.log(err);
  }
};
