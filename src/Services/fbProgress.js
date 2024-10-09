export const updateUserProgress = async (userId, progress) => {
  try {
    const userRef = database.ref(`users/${userId}`);
    await userRef.update({ progress }); // Обновляем поле progress
  } catch (err) {
    console.log(err);
  }
};
