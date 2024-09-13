import "./Card.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Test from "./Test/Test";

export default function TestCard() {
  const tests = useSelector(state => state.autotests.tests);
  const { id } = useParams();

  return (
    <div>
      {tests.map(test => (
        <Test
          test={test}
          isVisible={Number(id) === test.id}
        />
      ))}
    </div>
  );
}
// const [switchButton, setSwitchButton] = useState(false);
// const [showResults, setShowResults] = useState(false);
// const [trueAnswers, setTrueAnswers] = useState(new Set()); //Здесь будут храниться айди правильных ответов
// const [disabled, setDisabled] = useState(true);
// const [inputDisabled, setInputDisabled] = useState(false);

// const [valueId, setValueId] = useState(null);
// const [inputValue, setInputValue] = useState(null);
// const [valueResultId, setValueResultId] = useState(null);
// const [inputValueResult, setInputValueResult] =
//   useState(null);

// const testsLength = tests.length;
// const currentTestNumber = count + 1;

// useEffect(() => {
//   setInputDisabled(false);
// }, [item.id]);

// const handleInputResult = (id, e) => {
//   // В эту функцию приходят данные из инпутов при клике

//   if ((id, e.target.value)) {
//     setInputValue(e.target.value);
//     setValueId(id);
//   } else {
//     console.log("данных нет");
//   }
//   setDisabled(false);
// };

// const handleAnswer = () => {
//   // КНОПКА "ОТВЕТИТЬ"
//   setSwitchButton(true);
//   if ([currentTestNumber].includes(testsLength)) {
//     //Проверка для того чтобы если дошли до последнего вопроса отрисовалась кнопка "Узнать результаты"
//     setShowResults(true);
//   }
//   setValueResultId(valueId);
//   setInputValueResult(inputValue);
//   setInputDisabled(true);

//   //делаем подсчет слов
//   if (inputValue === "true") {
//     if (!trueAnswers.has(valueId)) {
//       setTrueAnswers(prevState =>
//         new Set(prevState).add(valueId),
//       );
//     }
//   } else {
//     setTrueAnswers(trueAnswers);
//   }
// };

// const handleNext = () => {
//   // КНОПКА "ДАЛЕЕ"
//   setSwitchButton(false);
//   setDisabled(true);
//   setCount(count + 1);
// };

// const checkResults = () => {
//   // КНОПКА "УЗНАТЬ РЕЗУЛЬТАТЫ"

//   console.log(trueAnswers.size);
//   setTrueAnswersResult(trueAnswers.size); //отправляем слова в компонент Slider
// };

/* <div
              className={`answer ${
                item.id === valueResultId &&
                item.isRight === true
                  ? "green"
                  : ""
              }
                                   ${
                                     test.id ===
                                       valueResultId &&
                                     test.isRight === false
                                       ? "red"
                                       : ""
                                   }
                                   ${
                                     test.id !==
                                       valueResultId && //третье условие пока не работает
                                     inputValueResult ===
                                       false &&
                                     test.isRight === true
                                       ? "green"
                                       : ""
                                   }
                                   `}
              key={test.id}
            >
              <input
                className={`radio-input
                                      ${
                                        item.id ===
                                          valueResultId &&
                                        item.isRight === true
                                          ? "green-img"
                                          : ""
                                      }
                                         ${
                                           item.id ===
                                             valueResultId &&
                                           item.isRight ===
                                             false
                                             ? "red-img"
                                             : ""
                                         }
                                         ${
                                           item.id !==
                                             valueResultId && //третье условие пока не работает
                                           inputValueResult ===
                                             false &&
                                           item.isRight ===
                                             true
                                             ? "green-img"
                                             : ""
                                         }
                                      `}
                type="radio"
                name="test"
                src={emptyCircle}
                alt="circle"
                id={test.id}
                value={item.isRight}
                onClick={e => handleInputResult(item.id, e)}
                disabled={inputDisabled}
              />
              <label
                htmlFor={test.id}
                className="answer-text"
              >
                {item.text}
              </label>
            </div>
          );
        })}
      {/* </div> */
// }
// <div/>
//     </div> */}
//     {switchButton ? (
//       showResults ? (
//         <div className="card-button">
//           <button
//             className="btn-result"
//             onClick={checkResults}
//           >
//             Узнать результат
//           </button>
//         </div>
//       ) : (
//         <div className="card-button">
//           <button
//             className="card-btn"
//             onClick={handleNext}
//           >
//             Далее
//           </button>
//         </div>
//       )
//     ) : (
//       <div className="card-button">
//         <button
//           className={
//             disabled ? "card-btnDisabled" : "card-btn"
//           }
//           onClick={handleAnswer}
//           disabled={disabled}
//         >
//           Ответить
//         </button>
//       </div>
//     )}
//   </div>
// </div>
//   );
// }
