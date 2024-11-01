import { database } from "../app/store";

export const addUser = async (user) => {
  try {
    const ref = database.ref("users").push();
    const { key } = ref;
    await ref.set({ ...user, key,avatar:'/src/assets/images/avatar2.jpg' });
  } catch (err) {
    console.log(err);
  }
};

export const updateUserData = async (userKey, data) => {
  try {
    const userRef = database.ref(`users/${userKey}`);
    await userRef.update(data);
    return true;
  } catch (error) {
    throw new Error(`Ошибка при обновлении данных: ${error.message}`);
  }
};