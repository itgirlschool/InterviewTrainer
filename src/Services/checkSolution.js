import { createAsyncThunk } from "@reduxjs/toolkit";
import { executeCode } from "./api";

const generateTestCode = (userCode, currentTask) => {
  // Генерируем вызов тестов
  const testCases = currentTask.tests.map(test => {
    // Используем имя функции напрямую и передаём аргументы
    const functionCall = `${currentTask.funcName}(...${JSON.stringify(test.input)})`;

    return `
      try {
        results.push(${functionCall});
      } catch (e) {
        results.push("Ошибка: " + e.message);
      }
    `;
  }).join("\n");

  // Генерируем полный тестовый код
  return `
    ${userCode} 
    const results = [];
    ${testCases}
    console.log(JSON.stringify(results));
  `;
};

export const checkSolution = createAsyncThunk(
  "tasks/checkSolution",
  async (_, { getState, rejectWithValue }) => {
    const state = getState().tasks;
    const currentTask = state.tasks[state.currentTaskIndex];
    const userCode = state.userSolution;

    if (!userCode) {
      return rejectWithValue("Код пользователя не определён");
    }

    // Генерируем тестовый код
    const testCode = generateTestCode(userCode, currentTask);

    console.log("Сгенерированный testCode:", testCode);

    try {
      // Выполняем код через API
      const result = await executeCode(testCode);
      console.log("Результат executeCode:", result);

      if (result.stderr) {
        throw new Error(result.stderr); // Обработка ошибок выполнения
      }

      // Попытка парсинга результата
      let apiOutputs;
      try {
        apiOutputs = JSON.parse(result.output.trim());
        console.log("Массив apiOutputs: ", apiOutputs);
      } catch (error) {
        console.error("Ошибка парсинга JSON: ", error);
        return rejectWithValue(`Ошибка парсинга JSON-ответа: ${result.output}`);
      }

      // Ожидаемые результаты
      const expectedOutputs = currentTask.tests.map(test => test.output);
      console.log("Массив expectedOutputs: ", expectedOutputs);

      // Проверяем, равны ли массивы
      const isEqual = apiOutputs.every((value, index) => 
        JSON.stringify(value) === JSON.stringify(expectedOutputs[index])
      );
      
      console.log(`Результат сравнения: isEqual = ${isEqual}`);
      return isEqual;
    } catch (error) {
      console.error("Ошибка при проверке решения через API:", error);
      return rejectWithValue("Ошибка при выполнении кода");
    }
  }
);