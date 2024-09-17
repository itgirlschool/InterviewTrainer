import "../../Components/Output/Output.scss"
import React from "react";
import { useSelector } from "react-redux";

const Output = () => {
  const { isCorrect, error } = useSelector((state) => state.tasks);

  let outputMessage = "";

  if (isCorrect === null) {
    outputMessage = "Ожидание проверки...";
  } else if (isCorrect) {
    outputMessage = "Все тесты пройдены успешно!";
  } else if (!isCorrect && !error) {
    outputMessage = "Некорректное решение, попробуй еще раз.";
  } else if (error) {
    outputMessage = `Ошибка: ${error}`;
  }

  return (
    <div className="output__pane">
      <p>{outputMessage}</p>
    </div>
  );
};

export default Output;
