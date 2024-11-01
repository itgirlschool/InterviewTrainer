import { database } from "../app/store";

export const updateUserAvatar = async (userKey, avatar) => {
  try {
    const userRef = database.ref(`users/${userKey}`);
    await userRef.update({ avatar });
  } catch (err) {
    console.log(err);
  }
};
