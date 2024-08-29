import './Card.scss';
import { useState, useEffect } from 'react';
import emptyCircle from "../../../assets/empty-circle.svg";


export default function Card({ item, count, setCount, tests }) {
    const { question, answers } = item;

    const [switchButton, setSwitchButton] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [trueAnswers, setTrueAnswers] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [valueId, setValueId] = useState(null);
    const [inputValue, setInputValue] = useState(null);
    
    const [valueResultId,setValueResultId] = useState(null);
    const [inputValueResult, setInputValueResult] = useState(null);

    const testsLength = tests.length;
    const currentTestNumber = count + 1;

    useEffect(()=>{
        setInputDisabled(false);
    },[item.id])

    const handleInputResult = (id, e) => {

        if (id, e.target.value) {
            setInputValue(e.target.value);
            setValueId(id);
        } else {
            console.log('данных нет');

        }
        setDisabled(false);
       
    }

    {/* const getAnswer = (e) => {
        console.log(e);

        setDisabled(false);
        if (e.target.value === true) {

            setTrueAnswers((prevState) => {
                const amount = prevState + 1;
                console.log(amount);
                return amount;
            });
        } else {
            setTrueAnswers(trueAnswers)
        }

    }
*/}


    const handleAnswer = () => {
        setSwitchButton(true);
        if ([currentTestNumber].includes(testsLength)) {
            setShowResults(true)
        }
        setValueResultId(valueId);
        setInputValueResult(inputValue);
        setInputDisabled(true);
    }

    const handleNext = () => {
        setSwitchButton(false);
        setDisabled(true);
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
               <div className='answer-wrapper'>
                <div className='answers-list'>
                    {/*Тестовый вариант*/}
                    {answers.map((item) => {
                        return <div className={`answer ${item.id === valueResultId &&
                                                         //inputValue === true &&
                                                        item.isRight === true ?
                                                        'green' : ''}
                                                        ${item.id===valueResultId &&
                                                         item.isRight ===false? 
                                                        "red": ""} 
                                                        ${//item.id !== valueId  
                                                        ![item.id].includes(valueResultId)&& 
                                                        inputValueResult === false && 
                                                        item.isRight===true ?
                                                        'green':''}`} 
                                                        key={item.id}>

                            <input
                                className={`radio-input 
                                    ${item.id === valueResultId &&
                                       item.isRight === true ?
                                       'green-img' : ''}
                                       ${item.id===valueResultId &&
                                        item.isRight ===false? 
                                       "red-img": ""} 
                                       ${//item.id !== valueId  третье условие пока не работает
                                       ![item.id].includes(valueResultId)&& 
                                       inputValueResult === false && 
                                       item.isRight===true ?
                                       'green-img':''}
                                    `}
                                type="radio"
                                name="answer"
                                src={emptyCircle} alt='circle'
                                id={item.id}
                                value={item.isRight}
                                onClick={(e) => handleInputResult(item.id, e)}
                                disabled={inputDisabled}
                            />
                            <label
                                htmlFor={item.id}
                                className='answer-text'>
                                {item.text}
                            </label>
                        </div>
                    })}
                </div>
                </div>
                {switchButton ?
                    (showResults ? <div className='card-button'>
                        <button
                            className='btn-result'
                            onClick={checkResults}>Узнать результат</button>
                    </div> :
                        <div className='card-button'>
                            <button
                                className='card-btn'
                                onClick={handleNext}>Далее</button>
                        </div>
                    )
                    :
                    <div className='card-button'>
                        <button
                            className={disabled ? 'card-btnDisabled' : 'card-btn'}
                            onClick={handleAnswer}
                            disabled={disabled}
                        >Ответить</button>
                    </div>
                }

            </div>

        </div>
    )
}