import './Card.scss';
import { useState, useEffect} from 'react';

export default function Card({ item, count, setCount, tests }) {
    const { question, answers } = item;
    //const [value, setValue] = useState(1);
    
   
//console.log(answers[0].checkOne, answers[1].checkTwo,answers[2].checkThree,answers[3].checkFour,);

   const [switchButton, setSwitchButton] = useState(false);
   const [switchResults, setSwitchResults]= useState(false);
   const testsLength = tests.length;
   const amountOfQuestions = count+1;

  
   
    const handleSendBtn = () => {
        setSwitchButton(true);
        console.log(answers[0].checkOne, answers[1].checkTwo,answers[2].checkThree,answers[3].checkFour,);
        
       /* if([amountOfQuestions].includes(testsLength)){
            setSwitchResults(true)
        
           }
           //return true;
        if(value=='1' && answers[0].checkOne ==true){
            console.log('Первый верный');
            return;
            
        }else{
            console.log('Первый неверный');
            
        }

        if(value=='2' && answers[0].checkTwo ==true){
            console.log('Второй верный');
            return;
            
        } else{
            console.log('Второй неверный');
            
            
        }
        if(value=='3' && answers[0].checkThree ==true){
            console.log('Третий верный');
            return;
        }else{
            console.log('Третий неверный');
            
            
        }
         if(value=='4' && answers[0].checkFour ==true){
            console.log('Четвертый верный');
            
        }else{
            console.log('Четвертый неверный');
            
        }

*/
           
    }

    const handleNextBtn =()=>{
        setSwitchButton(false);
        //console.log(switchResults);

        setCount(count + 1);
        //setValue(1);
      
        
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
                        type="radio" 
                        name="answer" 
                        id="first-answer" 
                        hidden value={answers[0].checkOne}
                        //checked={value == '1' ? true : false}
                        //onChange={(e)=>setValue(e.target.value)}
                        />
                        <label htmlFor="first-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[0].answerOne}</label>
                    </div>
                    {/*Ответ два*/}
                    <div className='answer'>
                        <input 
                        type="radio" 
                        name="answer" 
                        id="second-answer" 
                        hidden 
                        value={answers[1].checkTwo}
                        //checked={value == '2' ? true : false}
                        //onChange={(e)=>setValue(e.target.value)}
                        />
                        <label htmlFor="second-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[1].answerTwo}</label>
                    </div>
                    {/*Ответ три*/}
                    <div className='answer'>
                        <input 
                        type="radio" 
                        name="answer" 
                        id="third-answer" 
                        hidden
                        value={answers[2].checkThree}
                        //checked={value == '3' ? true : false}
                        //onChange={(e)=>setValue(e.target.value)}
                        />
                        <label htmlFor="third-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[2].answerThree}</label>
                    </div>
                    {/*Ответ четыре*/}
                    <div className='answer'>
                        <input 
                        type="radio" 
                        name="answer" 
                        id="fourth-answer" 
                        hidden 
                        value={answers[3].checkFour}
                       // checked={value == '4' ? true : false}
                       // onChange={(e)=>setValue(e.target.value)}
                        />
                        <label htmlFor="fourth-answer" className="radio-style"></label>
                        <label htmlFor="first-answer" className='answer-text'>{answers[3].answerFour}</label>
                    </div>
                </div>

                {switchButton ?
                (switchResults?<div className='card-button'>
                    <button className='btn-result'>Узнать результат</button>
                </div>:
                <div className='card-button'>
                <button className='card-btn' onClick={handleNextBtn}>Далее</button>
            </div>
            )
                    :
                    <div className='card-button'>
                        <button className='card-btn' onClick={handleSendBtn}>Отправить</button>
                    </div> 
                }

            </div>

        </div>
    )
}