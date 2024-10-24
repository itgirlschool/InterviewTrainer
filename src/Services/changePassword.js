import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export const changePassword = async (currentPassword, newPassword) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) throw new Error("Пользователь не аутентифицирован");

  try {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    return true;
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      throw new Error("Неверный текущий пароль");
    }
    if (error.code === "auth/requires-recent-login") {
      throw new Error("Требуется повторный вход в систему для смены пароля");
    }
    if (error.code === "auth/invalid-credential") {
      throw new Error("Неверные учетные данные. Проверьте текущий пароль.");
    }
    throw new Error(`Ошибка при изменении пароля: ${error.message}`);
  }
}
