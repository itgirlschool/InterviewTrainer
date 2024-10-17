import { database } from "../app/store";

export const updateUserProgress = async (userKey, progress) => {
  try {
    const userRef = database.ref(`users/${userKey}`);
    await userRef.update({ progress });
  } catch (err) {
    console.log(err);
  }
};
