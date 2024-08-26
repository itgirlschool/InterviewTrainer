import './Card.scss';
import { useState, useEffect } from 'react';

export default function Card({ item, count, setCount, tests }) {
    const { question, answers } = item;


    const [switchButton, setSwitchButton] = useState(false);
    const [switchResults, setSwitchResults] = useState(false);
    const [trueAnswers, setTrueAnswers] = useState(0);
    const [disabledButton, setDisabledButton] = useState(true);

    const testsLength = tests.length;
    const amountOfQuestions = count + 1;

    ////////////////////

    const getAnswer = (e) => {
        setDisabledButton(false);
        if (e.target.value === 'true') {

            setTrueAnswers((prevState) => {
                const amount = prevState + 1;
                console.log(amount);
                return amount;
            });
        } else {
            setTrueAnswers(trueAnswers)
        }

        if (e.target.checked == true && e.target.value === 'true') {
            console.log('зеленый');

        } else if (e.target.checked == true && e.target.value === 'false') {
            console.log("красный");

        }
        console.log(e);

    }



    const handleSendBtn = () => {
        setSwitchButton(true);
        if ([amountOfQuestions].includes(testsLength)) {
            setSwitchResults(true)
        }
        console.log(trueAnswers);
    }

    const handleNextBtn = () => {
        setSwitchButton(false);
        setDisabledButton(true);
        setCount(count + 1);
    }

    const checkResults = () => {
        console.log(trueAnswers);

    }


    return (
        <div className='card__container' key={item.id}>
            <div className='card-wrapper'>
                <div className='card-question'>
                    <h5 className='question'>{question}</h5>
                </div>

                <div className='answers-list'>
                    {/*Ответ один*/}
                    <div className='answer'>
                        <input
                            onClick={(e) => getAnswer(e)}
                            type="radio"
                            name="answer"
                            id="first-answer"
                            hidden
                            value={answers[0].checkOne}

                        />
                        <label htmlFor="first-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[0].answerOne}</label>
                    </div>
                    {/*Ответ два*/}
                    <div className='answer'>
                        <input
                            onClick={(e) => getAnswer(e)}
                            type="radio"
                            name="answer"
                            id="second-answer"
                            hidden
                            value={answers[1].checkTwo}

                        />
                        <label htmlFor="second-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[1].answerTwo}</label>
                    </div>
                    {/*Ответ три*/}
                    <div className='answer'>
                        <input
                            onClick={(e) => getAnswer(e)}
                            type="radio"
                            name="answer"
                            id="third-answer"
                            hidden
                            value={answers[2].checkThree}

                        />
                        <label htmlFor="third-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[2].answerThree}</label>
                    </div>
                    {/*Ответ четыре*/}
                    <div className='answer'>
                        <input
                            onClick={(e) => getAnswer(e)}
                            type="radio"
                            name="answer"
                            id="fourth-answer"
                            hidden
                            value={answers[3].checkFour}

                        />
                        <label htmlFor="fourth-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[3].answerFour}</label>
                    </div>
                </div>

                {switchButton ?
                    (switchResults ? <div className='card-button'>
                        <button className='btn-result' onClick={checkResults}>Узнать результат</button>
                    </div> :
                        <div className='card-button'>
                            <button className='card-btn' onClick={handleNextBtn}>Далее</button>
                        </div>
                    )
                    :
                    <div className='card-button'>
                        <button

                            className={disabledButton ? 'card-btnDisabled' : 'card-btn'}
                            onClick={handleSendBtn}
                            disabled={disabledButton}
                        >Отправить</button>
                    </div>
                }

            </div>

        </div>
    )
}