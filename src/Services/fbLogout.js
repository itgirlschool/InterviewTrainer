import { getAuth, signOut } from "firebase/auth";

const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Ошибка при попытке разлогиниться:", error);
  }
};

export default logout;
