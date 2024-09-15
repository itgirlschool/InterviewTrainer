export const executeCode = async (userCode) => {
  try {
    const response = await fetch("/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "javascript",
        version: "*",
        files: [{ name: "userCode.js", content: userCode }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status}`);
    }

    const result = await response.json();
    return result.run;
  } catch (error) {
    throw new Error(`Ошибка выполнения кода: ${error.message}`);
  }
};
