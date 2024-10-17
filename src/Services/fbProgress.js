import { database } from "../app/store";

export const updateUserProgress = async (userKey, progress) => {
  try {
    const userRef = database.ref(`users/${userKey}`);
    await userRef.update({ progress });
    console.log("Progress updated successfully for userId: ", userKey);
  } catch (err) {
    console.log(err);
  }
};
