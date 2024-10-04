import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const changePassword = createAsyncThunk(
  "userAuth/changePassword",
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      return rejectWithValue("Пользователь не аутентифицирован");
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      return true;
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        return rejectWithValue("Неверный текущий пароль");
      }
      if (error.code === 'auth/requires-recent-login') {
        return rejectWithValue("Требуется повторный вход в систему для смены пароля");
      }
      return rejectWithValue(`Ошибка при изменении пароля: ${error.message}`);
    }
  }
);
