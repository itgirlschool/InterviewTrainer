import axios from "axios";

const API = axios.create({
  baseURL: "/api/v2/piston",
});

export const executeCode = async (userCode) => {
  try {
    const response = await API.post("/execute", {
      language: "javascript",
      version: "*",
      files: [
        {
          name: "userCode.js",
          content: userCode,
        },
      ],
    });
    return response.data.run;
  } catch (error) {
    if (error.response) {
      console.error(`Ошибка с кодом ${error.response.status}: ${error.response.data}`);
      throw new Error(`Ошибка выполнения кода: ${error.response.data}`);
    } else {
      console.error("Ошибка сети или запроса:", error.message);
      throw new Error(`Ошибка сети или запроса: ${error.message}`);
    }
  }
};
