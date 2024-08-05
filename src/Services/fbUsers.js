import { database } from "../app/store";

export const addUser = async (user) => {
  try {
    const ref = database.ref("users").push();
    const { key } = ref;
    await ref.set({ ...user, key });
  } catch (err) {
    console.log(err);
  }
};
